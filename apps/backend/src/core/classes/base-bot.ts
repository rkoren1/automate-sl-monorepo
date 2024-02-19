import {
  Bot,
  BotOptionFlags,
  InstantMessageEvent,
  LoginParameters,
  Vector3,
} from '@caspertech/node-metaverse';
import { LoginResponse } from '@caspertech/node-metaverse/dist/lib/classes/LoginResponse';
import { BotDb, PrismaClient, User } from '@prisma/client';
import { SubSink } from 'subsink';
import { isUuidValid } from '../services/helper.service';
import Signals = NodeJS.Signals;

export class BaseBot extends Bot {
  public isConnected = false;
  protected isConnecting = false;
  private reconnectTimer?: NodeJS.Timeout;
  protected loginResponse?: LoginResponse;
  protected ownerUUID: string;
  protected ownerName: string;
  protected botData: BotDb;
  protected prisma = new PrismaClient();
  protected subs = new SubSink();
  //private cronJob: CronJob;

  constructor(
    login: LoginParameters,
    options: BotOptionFlags,
    user: User,
    bot: BotDb,
  ) {
    super(login, options);
    this.botData = bot;
    this.ownerUUID = user.uuid;
    this.ownerName = this.convertOwnerName(user.avatarName);
    //ping bot every 10mins
    /* this.cronJob = new CronJob(
      '10 * * * *',
      () => this.pingBot(login),
      null,
      true,
    ); */
  }

  public async run(): Promise<void> {
    const exitHandler = async (
      options: { exit?: boolean },
      err: Error | number | Signals,
    ) => {
      if (err && err instanceof Error) {
        console.log(err.stack);
      }
      if (this.isConnected) {
        console.log('Disconnecting');
        try {
          await this.stopBot();
        } catch (error) {
          console.error('Error when closing client:');
          console.error(error);
        }
        process.exit();
        return;
      }
      if (options.exit) {
        process.exit();
      }
    };

    // Do something when app is closing
    process.on('exit', exitHandler.bind(this, {}));

    // Catches ctrl+c event
    process.on('SIGINT', exitHandler.bind(this, { exit: true }));

    // Catches "kill pid"
    process.on('SIGUSR1', exitHandler.bind(this, { exit: true }));
    process.on('SIGUSR2', exitHandler.bind(this, { exit: true }));

    // Catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(this, { exit: true }));

    // This will tell the bot to keep trying to teleport back to the 'stay' location.
    // You can specify a region and position, such as:
    // bot.stayPut(true, 'Izanagi', new nmv.Vector3([128, 128, 21]));
    // Note that the 'stay' location will be updated if you request or accept a lure (a teleport).
    // If no region is specified, it will be set to the region you log in to.
    //this.stayPut(true, this.stayRegion, this.stayPosition);

    await this.properLogin();
  }

  private async properLogin(): Promise<void> {
    if (this.isConnecting) {
      return;
    }
    this.isConnecting = true;
    try {
      if (this.reconnectTimer !== undefined) {
        clearInterval(this.reconnectTimer);
      }
      this.reconnectTimer = setInterval(this.reconnectCheck.bind(this), 60000);

      console.log('Logging in..');
      this.loginResponse = await this.login();

      console.log('Login complete');

      // Establish circuit with region
      await this.connectToSim();

      console.log('Waiting for event queue');
      await this.waitForEventQueue();

      this.isConnected = true;
    } finally {
      this.isConnecting = false;
    }
    return this.connected();
  }

  private async reconnectCheck(): Promise<void> {
    if (!this.isConnected) {
      await this.login();
    }
  }

  private async connected(): Promise<void> {
    this.clientEvents.onDisconnected.subscribe((event) => {
      if (event.requested) {
        if (this.reconnectTimer !== undefined) {
          clearInterval(this.reconnectTimer);
        }
      }
      this.isConnected = false;
      console.warn(
        'Disconnected from simulator: ' + event.message,
        ' ',
        this.ownerName,
      );
    });
    await this.onConnected();
  }

  protected async onConnected(): Promise<void> {
    this.acceptOwnerTeleport();
    this.acceptGroupInvites();
    this.subscribeToImCommands();
  }

  public async stopBot(): Promise<void> {
    //this.cronJob.stop();
    this.subs.unsubscribe();
    if (this.reconnectTimer !== undefined) {
      clearInterval(this.reconnectTimer);
      this.reconnectTimer = undefined;
    }
    return this.close();
  }

  private pingBot(login: LoginParameters) {
    this.prisma.botDb
      .findFirst({
        where: { uuid: this.botData.uuid },
      })
      .then((resBot) => {
        if (
          (this.currentRegion === undefined || this.currentRegion === null) &&
          (resBot.shouldRun || resBot.running)
        ) {
          this.prisma.botLog.create({
            data: {
              name: login.firstName + ' ' + login.lastName,
              botUuid: this.botData.uuid,
              message: 'Tried to reconnect bot automatically',
              event: 'auto-reconnect',
            },
          });
          this.close()
            .catch((err) =>
              console.log(
                'tried to close bot with error ' + login.firstName,
                err,
              ),
            )
            .finally(() => {
              this.run().then(() => {
                this.prisma.botDb.update({
                  data: { running: true, shouldRun: false },
                  where: { id: this.botData.id },
                });
              });
            });
        }
      });
  }

  private acceptOwnerTeleport() {
    this.subs.sink = this.clientEvents.onLure.subscribe((teleport) => {
      if (teleport.from?.toString() === this.ownerUUID) {
        this.clientCommands.teleport.acceptTeleport(teleport);
      }
    });
  }

  private convertOwnerName(name: string) {
    return name.replace(' ', '.').toLocaleLowerCase();
  }

  private subscribeToImCommands() {
    this.subs.sink = this.clientEvents.onInstantMessage.subscribe(
      async (messageEvent: InstantMessageEvent) => {
        if (messageEvent.message === '') return;
        if (
          messageEvent.from?.toString() !== this.ownerUUID &&
          messageEvent.owner?.toString() !== this.ownerUUID
        ) {
          if (
            messageEvent.source === 1 &&
            messageEvent.fromName !== 'Second Life'
          ) {
            await this.clientCommands.comms.sendInstantMessage(
              messageEvent.from,
              "I'm sorry, but the Bot's commands are restricted to certain users with higher permissions. At this time, you do not have those permissions.",
            );
          }
          return;
        }
        const message = messageEvent.message.split('^');
        const messageCommand = message[0];
        const commandParams = message.slice(1);
        //parse commands and execute actions
        switch (messageCommand) {
          case 'send_im': {
            if (commandParams.length !== 2) {
              await this.clientCommands.comms.sendInstantMessage(
                messageEvent.from,
                'Invalid Command!',
              );
              break;
            }
            if (!isUuidValid(commandParams[0])) {
              await this.clientCommands.comms.sendInstantMessage(
                messageEvent.from,
                'Invalid UUID!',
              );
              break;
            }
            await this.clientCommands.comms.sendInstantMessage(
              commandParams[0],
              commandParams[1],
            );
            break;
          }

          case 'say': {
            try {
              await this.clientCommands.comms.say(commandParams[0]);
            } catch (error) {
              console.error(
                'say command failed for bot' + messageEvent.fromName,
              );
            }
            break;
          }

          case 'teleport': {
            if (commandParams.length !== 4) {
              await this.clientCommands.comms.sendInstantMessage(
                messageEvent.from,
                'Invalid Command!',
              );
              break;
            }
            try {
              await this.clientCommands.teleport.teleportTo(
                commandParams[0],
                new Vector3([
                  +commandParams[1],
                  +commandParams[2],
                  +commandParams[3],
                ]),
                Vector3.getZero(),
              );
            } catch (error) {
              await this.clientCommands.comms.sendInstantMessage(
                messageEvent.from,
                'Command Failed',
              );
              console.error(
                'teleport command failed for bot' + messageEvent.fromName,
              );
            }
            break;
          }

          case 'shout': {
            try {
              await this.clientCommands.comms.shout(commandParams[0]);
            } catch (error) {
              console.error(
                'shout command failed for bot' + messageEvent.fromName,
              );
            }
            break;
          }

          case 'group_im': {
            try {
              await this.clientCommands.comms.sendGroupMessage(
                commandParams[0],
                commandParams[1],
              );
            } catch (error) {
              console.error(
                'group im command failed ',
                ' error: ',
                error,
                ' event: ',
                messageEvent,
              );
            }
            break;
          }

          case 'group_notice': {
            if (commandParams.length !== 3) {
              await this.clientCommands.comms.sendInstantMessage(
                messageEvent.from,
                'Invalid Command!',
              );
              break;
            }
            try {
              await this.clientCommands.group.sendGroupNotice(
                commandParams[0],
                commandParams[1],
                commandParams[2],
              );
            } catch (error) {
              console.error(
                'send group notice command failed for bot' +
                  messageEvent.fromName,
              );
            }

            break;
          }

          case 'group_invite': {
            if (commandParams.length !== 3) {
              await this.clientCommands.comms.sendInstantMessage(
                messageEvent.from,
                'Invalid Command!',
              );
              break;
            }
            try {
              await this.clientCommands.group.sendGroupInvite(
                commandParams[0],
                commandParams[1],
                commandParams[2],
              );
            } catch (error) {
              console.error(
                'send group invite command failed for bot' +
                  messageEvent.fromName,
              );
            }
            break;
          }

          default: {
            await this.clientCommands.comms.sendInstantMessage(
              messageEvent.from,
              'Invalid Command!',
            );
            break;
          }
        }
      },
    );
  }

  private acceptGroupInvites() {
    this.subs.sink = this.clientEvents.onGroupInvite.subscribe(
      (groupInvite) => {
        if (groupInvite.fromName === this.ownerName)
          this.clientCommands.group.acceptGroupInvite(groupInvite);
      },
    );
  }
}
