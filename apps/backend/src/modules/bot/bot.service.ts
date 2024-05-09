import {
  Bot,
  BotOptionFlags,
  LoginParameters,
} from '@caspertech/node-metaverse';
import { Injectable } from '@nestjs/common';
import { forkJoin } from 'rxjs';
import urlMetadata from 'url-metadata';
import { BasicDiscBot } from '../../core/classes/basic-disc-bot';
import { SmartBot } from '../../core/classes/smart-bot';
import { PrismaService } from '../../providers/prisma.service';
import { BotRepository } from './bot.repository';
import { CreateBotDto } from './dto/create-bot.dto';
import { GetBotDto } from './dto/get-bot.dto';
import { SetBotConfigurationBodyDto } from './dto/set-bot-configuration-body.dto';
import { SetDiscordSettingsBodyDto } from './dto/set-discord-settings-body.dto';
@Injectable()
export class BotService {
  botInstances = new Array<SmartBot | BasicDiscBot>();

  constructor(
    private botRepo: BotRepository,
    private prisma: PrismaService,
  ) {}

  async slAccountExists(firstName: string, lastName: string, password: string) {
    const loginParams: LoginParameters = new LoginParameters();
    loginParams.firstName = firstName;
    loginParams.lastName = lastName;
    loginParams.password = password;
    loginParams.start = 'last';
    const bot: Bot = new Bot(loginParams, BotOptionFlags.None);

    try {
      const res = await bot.login();
      return res.agent.agentID['mUUID'];
    } catch {
      return false;
    }
  }

  create(createBotDto: CreateBotDto) {
    return new Promise((resolve, reject) => {
      this.slAccountExists(
        createBotDto.loginFirstName,
        createBotDto.loginLastName,
        createBotDto.loginPassword,
      ).then((uuid) => {
        if (!uuid) return reject({ exists: false });

        urlMetadata('https://world.secondlife.com/resident/' + uuid)
          .then((metadata) => {
            const currentDate = new Date();
            const after2Weeks = new Date();
            after2Weeks.setDate(after2Weeks.getDate() + 14);

            this.botRepo
              .create({
                data: {
                  userId: createBotDto.userId,
                  loginFirstName: createBotDto.loginFirstName,
                  loginLastName: createBotDto.loginLastName,
                  loginPassword: createBotDto.loginPassword,
                  running: false,
                  shouldRun: false,
                  loginSpawnLocation: createBotDto.loginSpawnLocation,
                  loginRegion: createBotDto.loginRegion,
                  uuid: uuid,
                  imageId: metadata.imageid,
                },
              })
              .then(async (bot) => {
                const userBots = await this.botRepo.findMany({
                  where: { userId: createBotDto.userId },
                });
                //if this is the only bot give 14 days of free trial subscription
                if (userBots.length < 2) {
                  await this.prisma.subscription.create({
                    data: {
                      subscriptionStart: currentDate,
                      subscriptionEnd: after2Weeks,
                      packageId: 1,
                      botId: bot.id,
                    },
                  });
                }
                //just create an empty subscription
                else {
                  await this.prisma.subscription.create({
                    data: {
                      subscriptionStart: currentDate,
                      subscriptionEnd: currentDate,
                      packageId: 1,
                      botId: bot.id,
                    },
                  });
                }
                return resolve(metadata.imageid);
              })
              .catch((err) => {
                console.error(err);
                return reject(err);
              });
          })
          .catch((err) => {
            return reject(err);
          });
      });
    });
  }

  getAllBots(userId: number) {
    return new Promise((resolve, reject) => {
      const currentDate = new Date();
      forkJoin([
        this.botRepo.findMany({
          select: {
            id: true,
            loginFirstName: true,
            loginLastName: true,
            running: true,
            uuid: true,
            imageId: true,
            subscriptions: { where: { subscriptionEnd: { gt: currentDate } } },
          },
          where: { userId: userId },
        }),
        this.prisma.sharedBot.findMany({
          select: {
            id: true,
            loginFirstName: true,
            loginLastName: true,
            running: true,
            uuid: true,
            imageId: true,
            sharedBotUserSubscriptions: { where: { userId: userId } },
          },
        }),
      ]).subscribe({
        next: (result) => {
          const response: GetBotDto = { my: [], shared: [] };
          result[0].forEach((ele) => {
            response.my.push({
              id: ele.id,
              loginName: ele.loginFirstName,
              loginLastName: ele.loginLastName,
              running: ele.running,
              uuid: ele.uuid,
              imageId: ele.imageId,
              validSubscription: ele.subscriptions.length > 0 ? true : false,
            });
          });
          result[1].forEach((ele) => {
            response.shared.push({
              id: ele.id,
              loginName: ele.loginFirstName,
              loginLastName: ele.loginLastName,
              running: ele.running,
              uuid: ele.uuid,
              imageId: ele.imageId,
              validSubscription: false,
            });
          });
          resolve(response);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  async getBotConfiguration(data) {
    try {
      const result = await this.botRepo.findMany({
        select: {
          id: true,
          loginFirstName: true,
          imageId: true,
          loginLastName: true,
          loginSpawnLocation: true,
          loginRegion: true,
          subscriptions: {
            select: {
              subscriptionStart: true,
              subscriptionEnd: true,
              package: {
                select: { id: true, packageName: true },
              },
            },
          },
        },
        where: {
          loginFirstName: data.botFirstName,
          loginLastName: data.botLastName,
          userId: data.userId,
        },
      });
      return result[0];
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  startBot(botId: number, userId: number) {
    return new Promise((resolve, reject) => {
      return this.botRepo
        .findFirst({
          where: { id: botId, userId: userId },
        })
        .then((bot) => {
          if (
            bot.loginFirstName === null ||
            bot.loginPassword === null ||
            bot.loginSpawnLocation === null
          )
            return resolve({ changedRows: 0 });

          const loginParameters = new LoginParameters();
          loginParameters.firstName = bot.loginFirstName;
          loginParameters.lastName = bot.loginLastName;
          loginParameters.password = bot.loginPassword;
          loginParameters.start = bot.loginSpawnLocation; //region/x/y/z or home or last

          const options =
            BotOptionFlags.LiteObjectStore |
            BotOptionFlags.StoreMyAttachmentsOnly;

          //get User uuid
          this.prisma.user
            .findUnique({
              where: { id: userId },
            })
            .then((user) => {
              this.prisma.discordSettings
                .findMany({ where: { botId: botId } })
                .then((discordSettings) => {
                  if (discordSettings.length > 0) {
                    //start bot
                    const workerBot = new BasicDiscBot(
                      loginParameters,
                      options,
                      user,
                      bot,
                      discordSettings[0],
                    );
                    return workerBot
                      .run()
                      .then(() => {
                        workerBot.isConnected = true;
                        this.botInstances[botId] = workerBot;

                        return this.botRepo
                          .update({
                            data: { running: true },
                            where: { id: botId, userId: userId },
                          })
                          .then((result) => resolve(result))
                          .catch((err) => reject(err));
                      })
                      .catch((err: Error) => {
                        console.error(err);
                        return reject(err);
                      });
                  } else {
                    //start bot
                    const workerBot = new SmartBot(
                      loginParameters,
                      options,
                      user,
                      bot,
                    );
                    return workerBot
                      .run()
                      .then(() => {
                        this.botInstances[botId] = workerBot;
                        return resolve(true);
                      })
                      .catch((err: Error) => {
                        console.error(err);
                        return reject(err);
                      });
                  }
                });
            })
            .catch((err) => {
              console.error(err);
              return reject(err);
            });
        })
        .catch((err) => {
          console.error(err);
          return reject(err);
        });
    });
  }

  async stopBot(botId: number, userId: number) {
    try {
      await this.botInstances[botId].stopBot();
      delete this.botInstances[botId];
      return true;
    } catch (err) {
      //also set bot to be off
      await this.botRepo.update({
        data: { running: false },
        where: { id: botId, userId: userId },
      });
      console.error(err);
      return err;
    }
  }

  async getSharedBots(userId: number) {
    try {
      const result = await this.prisma.sharedBot.findMany({
        select: {
          id: true,
          loginFirstName: true,
          loginLastName: true,
          running: true,
          uuid: true,
          imageId: true,
          sharedBotUserSubscriptions: { where: { userId: userId } },
        },
      });
      return result;
    } catch (err) {
      return err;
    }
  }

  async getPackages() {
    try {
      const result = await this.prisma.subPackage.findMany({
        select: {
          id: true,
          packageName: true,
          packageDescription: true,
          pricePerWeek: true,
          discount: true,
          pricePerMonth: true,
          couponId: true,
        },
      });
      return result;
    } catch (err) {
      return err;
    }
  }

  getDiscordSettings(botId: number) {
    return new Promise((resolve, reject) => {
      return this.prisma.discordSettings
        .findMany({
          select: {
            id: true,
            webHookUrl: true,
            slGroupUuid: true,
            discChannelId: true,
          },
          where: { botId: botId },
        })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }

  async setDiscordSettings(data: SetDiscordSettingsBodyDto) {
    if (data.id) {
      //create
      try {
        const result = await this.prisma.discordSettings.update({
          data: {
            botId: data.botId,
            discChannelId: data.discChannelId,
            webHookUrl: data.webHookUrl,
            slGroupUuid: data.slGroupUuid,
          },
          where: { id: data.id },
        });
        return result;
      } catch (err) {
        return err;
      }
    } else {
      //update
      try {
        const result = await this.prisma.discordSettings.create({
          data: {
            botId: data.botId,
            discChannelId: data.discChannelId,
            webHookUrl: data.webHookUrl,
            slGroupUuid: data.slGroupUuid,
          },
        });
        return result;
      } catch (err) {
        return err;
      }
    }
  }

  async setBotConfiguration(data: SetBotConfigurationBodyDto) {
    try {
      const result = await this.botRepo.update({
        data: {
          loginRegion: data.loginRegion,
          loginSpawnLocation: data.loginSpawnLocation,
        },
        where: {
          id: data.botId,
        },
      });
      return result;
    } catch (err) {
      return err;
    }
  }

  async refreshBotStatus(botId: number) {
    const bot = await this.botRepo.findFirst({ where: { id: botId } });
    //if bot doesnt exist and is running set running to false
    if (!this.botInstances[botId] && bot.running) {
      return this.botRepo
        .update({ data: { running: false }, where: { id: botId } })
        .then(() => true);
    }
    //else check if bot is offline and set running to false
    if (!this.botInstances[botId]?.isConnected) {
      return this.botRepo
        .update({ data: { running: false }, where: { id: botId } })
        .then(() => true);
    }
    return true;
  }
}
