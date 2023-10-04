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
import { DiscordSettings } from '../discord-settings/entities/discord-setting.entity';
import { Package } from '../package/entities/package.entity';
import { SharedBotUserSubscription } from '../shared-bot-user-subscription/entities/shared-bot-user-subscription.entity';
import { SharedBot } from '../shared-bot/entities/shared-bot.entity';
import { CreateBotDto } from './dto/create-bot.dto';
import { GetBotDto } from './dto/get-bot.dto';
import { SetBotConfigurationBodyDto } from './dto/set-bot-configuration-body.dto';
import { SetDiscordSettingsBodyDto } from './dto/set-discord-settings-body.dto';
import { BotDb } from './entities/bot.entity';
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
                  user_id: createBotDto.userId,
                  login_first_name: createBotDto.loginFirstName,
                  login_last_name: createBotDto.loginLastName,
                  login_password: createBotDto.loginPassword,
                  running: false,
                  should_run: false,
                  login_spawn_location: createBotDto.loginSpawnLocation,
                  login_region: createBotDto.loginRegion,
                  uuid: uuid,
                  image_id: metadata.imageid,
                },
              })
              .then(async (bot) => {
                const userBots = await this.prisma.bot.findMany({
                  where: { user_id: createBotDto.userId },
                });
                //if this is the only bot give 3 days of free subscription
                if (userBots.length < 2) {
                  this.prisma.subscription.create({
                    data: {
                      subscription_start: currentDate,
                      subscription_end: after3Days,
                      package_id: 1,
                      bot_id: bot.id,
                    },
                  });
                }
                //just create an empty subscription
                else {
                  this.prisma.subscription.create({
                    data: {
                      subscription_start: currentDate,
                      subscription_end: currentDate,
                      package_id: 1,
                      bot_id: bot.id,
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
            login_first_name: true,
            login_last_name: true,
            running: true,
            uuid: true,
            image_id: true,
            subscription: { where: { subscription_end: { gt: currentDate } } },
          },
          where: { user_id: userId },
        }),
        this.prisma.shared_bot.findMany({
          select: {
            id: true,
            login_first_name: true,
            login_last_name: true,
            running: true,
            uuid: true,
            image_id: true,
            shared_bot_user_subscription: { where: { user_id: userId } },
          },
        }),
      ]).subscribe({
        next: (result) => {
          const response: GetBotDto = { my: [], shared: [] };
          result[0].forEach((ele) => {
            response.my.push({
              id: ele.id,
              loginName: ele.login_first_name,
              loginLastName: ele.login_last_name,
              running: ele.running,
              uuid: ele.uuid,
              imageId: ele.image_id,
              validSubscription: ele.subscription.length > 0 ? true : false,
            });
          });
          result[1].forEach((ele) => {
            response.shared.push({
              id: ele.id,
              loginName: ele.login_first_name,
              loginLastName: ele.login_last_name,
              running: ele.running,
              uuid: ele.uuid,
              imageId: ele.image_id,
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
          login_first_name: true,
          image_id: true,
          login_last_name: true,
          login_spawn_location: true,
          login_region: true,
          subscription: {
            select: {
              subscription_start: true,
              subscription_end: true,
              subPackage: {
                select: { id: true, package_name: true },
              },
            },
          },
        },
        where: {
          login_first_name: data.botFirstName,
          login_last_name: data.botLastName,
          user_id: data.userId,
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
      return BotDb.findOne({
        attributes: [
          'id',
          'loginFirstName',
          'loginLastName',
          'loginPassword',
          'loginSpawnLocation',
          'loginRegion',
          'uuid',
        ],
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
              select: { uuid: true, avatar_name: true },
            })
            .then((user) => {
              DiscordSettings.findAll({ where: { botId: botId } }).then(
                (discordSettings) => {
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
                        return BotDb.update(
                          { running: true },
                          { where: { id: botId, userId: userId } },
                        )
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
                        return BotDb.update(
                          { running: true },
                          { where: { id: botId, userId: userId } },
                        )
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
                },
              );
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
      await this.botInstances[botId].close();
      this.botInstances[botId].isConnected = false;
      await BotDb.update(
        { running: false },
        { where: { id: botId, userId: userId } },
      );
      return true;
    } catch (err) {
      await BotDb.update(
        { running: false },
        { where: { id: botId, userId: userId } },
      );
      return true;
    }
  }
  getSharedBots(userId: number) {
    return new Promise((resolve, reject) => {
      SharedBot.findAll({
        attributes: [
          'id',
          'loginFirstName',
          'loginLastName',
          'running',
          'uuid',
          'imageId',
        ],
        include: [
          { model: SharedBotUserSubscription, where: { userId: userId } },
        ],
      })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }
  getPackages() {
    return new Promise((resolve, reject) => {
      return Package.findAll({
        attributes: [
          'id',
          'packageName',
          'packageDescription',
          'pricePerWeek',
          'discount',
          'pricePerMonth',
          'couponId',
        ],
      })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }
  getDiscordSettings(botId: number) {
    return new Promise((resolve, reject) => {
      return DiscordSettings.findAll({
        attributes: ['id', 'webHookUrl', 'slGroupUuid', 'discChannelId'],
        where: { botId: botId },
      })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }
  setDiscordSettings(data: SetDiscordSettingsBodyDto) {
    return new Promise((resolve, reject) => {
      return DiscordSettings.upsert({
        id: data.id,
        botId: data.botId,
        discChannelId: data.discChannelId,
        webHookUrl: data.webHookUrl,
        slGroupUuid: data.slGroupUuid,
      })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }
  setBotConfiguration(data: SetBotConfigurationBodyDto) {
    return new Promise((resolve, reject) => {
      return BotDb.update(
        {
          loginRegion: data.loginRegion,
          loginSpawnLocation: data.loginSpawnLocation,
        },
        { where: { id: data.botId } },
      )
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }
  refreshBotStatus(botId: number) {
    return new Promise((resolve, reject) => {
      BotDb.findOne({ where: { id: botId } }).then((bot) => {
        //if bot doesnt exist and is running set running to false
        if (!this.botInstances[botId] && bot.running) {
          return BotDb.update(
            { running: false },
            { where: { id: botId } },
          ).then(() => resolve(true));
        }
        //else check if bot is offline and set running to false
        if (!this.botInstances[botId]?.isConnected) {
          return BotDb.update(
            { running: false },
            { where: { id: botId } },
          ).then(() => resolve(true));
        }
        return resolve(true);
      });
    });
  }
}
