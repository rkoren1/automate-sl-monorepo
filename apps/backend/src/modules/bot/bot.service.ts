import {
  Bot,
  BotOptionFlags,
  LoginParameters,
} from '@caspertech/node-metaverse';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { forkJoin } from 'rxjs';
import urlMetadata from 'url-metadata';
import { BasicDiscBot } from '../../core/classes/basic-disc-bot';
import { SmartBot } from '../../core/classes/smart-bot';
import { CreateBotDto } from './dto/create-bot.dto';
import { GetBotDto } from './dto/get-bot.dto';
import { SetBotConfigurationBodyDto } from './dto/set-bot-configuration-body.dto';
import { SetDiscordSettingsBodyDto } from './dto/set-discord-settings-body.dto';
@Injectable()
export class BotService {
  prisma = new PrismaClient();
  botInstances = new Array<SmartBot | BasicDiscBot>();
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
            const after3Days = new Date();
            after3Days.setDate(after3Days.getDate() + 3);

            this.prisma.bot
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
                const userBots = await this.prisma.bot.findMany({
                  where: { userId: createBotDto.userId },
                });
                //if this is the only bot give 3 days of free subscription
                if (userBots.length < 2) {
                  this.prisma.subscription.create({
                    data: {
                      subscriptionStart: currentDate,
                      subscriptionEnd: after3Days,
                      packageId: 1,
                      botId: bot.id,
                    },
                  });
                }
                //just create an empty subscription
                else {
                  this.prisma.subscription.create({
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
        this.prisma.bot.findMany({
          select: {
            id: true,
            loginFirstName: true,
            loginLastName: true,
            running: true,
            uuid: true,
            imageId: true,
            subscription: { where: { subscriptionEnd: { gt: currentDate } } },
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
            sharedBotUserSubscription: { where: { userId: userId } },
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
              validSubscription: ele.subscription.length > 0 ? true : false,
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
  getBotConfiguration(data) {
    return this.prisma.bot
      .findMany({
        select: {
          id: true,
          loginFirstName: true,
          imageId: true,
          loginLastName: true,
          loginSpawnLocation: true,
          loginRegion: true,
          subscription: {
            select: {
              subscriptionStart: true,
              subscriptionEnd: true,
              subPackage: {
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
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.error(err);
        return err;
      });
  }
  startBot(botId: number, userId: number) {
    return new Promise((resolve, reject) => {
      return this.prisma.bot
        .findFirst({
          select: {
            id: true,
            loginFirstName: true,
            loginLastName: true,
            loginPassword: true,
            loginSpawnLocation: true,
            loginRegion: true,
            uuid: true,
          },
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
              select: { uuid: true, avatarName: true },
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
                      .login()
                      .then(() => workerBot.connectToSim())
                      .then(() => {
                        workerBot.isConnected = true;
                        this.botInstances[botId] = workerBot;

                        return this.prisma.bot
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
                      .login()
                      .then(() => workerBot.connectToSim())
                      .then(() => {
                        this.botInstances[botId] = workerBot;
                        return this.prisma.bot
                          .update({
                            data: { running: true },
                            where: { id: botId, userId: userId },
                          })
                          .then((result) => resolve(result))
                          .catch((err) => {
                            console.error(err);
                            return reject(err);
                          });
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
  stopBot(botId: number, userId: number) {
    return new Promise((resolve, reject) => {
      return this.botInstances[botId]
        .close()
        .then(() => {
          this.botInstances[botId].isConnected = false;
          return this.prisma.bot
            .update({
              data: { running: false },
              where: { id: botId, userId: userId },
            })
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        })
        .catch((err: Error) => reject(err));
    });
  }
  getSharedBots(userId: number) {
    return new Promise((resolve, reject) => {
      this.prisma.sharedBot
        .findMany({
          select: {
            id: true,
            loginFirstName: true,
            loginLastName: true,
            running: true,
            uuid: true,
            imageId: true,
            sharedBotUserSubscription: { where: { userId: userId } },
          },
        })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }
  getPackages() {
    return new Promise((resolve, reject) => {
      return this.prisma.subPackage
        .findMany({
          select: {
            id: true,
            packageName: true,
            packageDescription: true,
            pricePerWeek: true,
            discount: true,
            pricePerMonth: true,
            couponId: true,
          },
        })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
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
    try {
      const result = await this.prisma.discordSettings.upsert({
        create: {
          id: data.id,
          botId: data.botId,
          discChannelId: data.discChannelId,
          webHookUrl: data.webHookUrl,
          slGroupUuid: data.slGroupUuid,
        },
        update: {
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
  }
  async setBotConfiguration(data: SetBotConfigurationBodyDto) {
    try {
      const result = await this.prisma.bot.update({
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
    const bot = await this.prisma.bot.findUnique({ where: { id: botId } });
    //if bot doesnt exist and is running set running to false
    if (!this.botInstances[botId] && bot.running) {
      return this.prisma.bot
        .update({ data: { running: false }, where: { id: botId } })
        .then(() => true);
    }
    //else check if bot is offline and set running to false
    if (!this.botInstances[botId]?.isConnected) {
      return this.prisma.bot
        .update({ data: { running: false }, where: { id: botId } })
        .then(() => true);
    }
    return true;
  }
}
