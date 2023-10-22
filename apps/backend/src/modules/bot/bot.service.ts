import {
  Bot,
  BotOptionFlags,
  LoginParameters,
} from '@caspertech/node-metaverse';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { forkJoin } from 'rxjs';
import { EntityManager, MoreThan } from 'typeorm';
import urlMetadata from 'url-metadata';
import { BasicDiscBot } from '../../core/classes/basic-disc-bot';
import { SmartBot } from '../../core/classes/smart-bot';
import { DiscordSettings } from '../discord-settings/entities/discord-setting.entity';
import { SubPackage } from '../package/entities/sub-package.entity';
import { SharedBot } from '../shared-bot/entities/shared-bot.entity';
import { Subscription } from '../subscription/entities/subscription.entity';
import { User } from '../user/entities/user.entity';
import { CreateBotDto } from './dto/create-bot.dto';
import { GetBotDto } from './dto/get-bot.dto';
import { SetBotConfigurationBodyDto } from './dto/set-bot-configuration-body.dto';
import { SetDiscordSettingsBodyDto } from './dto/set-discord-settings-body.dto';
import { BotDb } from './entities/bot.entity';
@Injectable()
export class BotService {
  constructor(
    @InjectEntityManager()
    private em: EntityManager,
  ) {}
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
    } catch (err) {
      return false;
    }
  }
  async create(createBotDto: CreateBotDto) {
    const uuid = await this.slAccountExists(
      createBotDto.loginFirstName,
      createBotDto.loginLastName,
      createBotDto.loginPassword,
    );
    if (!uuid) return { exists: false };

    const metadata: any = await urlMetadata(
      'https://world.secondlife.com/resident/' + uuid,
    );
    const currentDate = new Date();
    const after3Days = new Date();
    after3Days.setDate(after3Days.getDate() + 3);

    const bot = this.em.create(BotDb, {
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
    });
    await this.em.save(bot);
    const userBots = await this.em.find(BotDb, {
      where: { userId: createBotDto.userId },
    });
    //if this is the only bot give 3 days of free subscription
    if (userBots.length < 2) {
      const sub = this.em.create(Subscription, {
        subscriptionStart: currentDate,
        subscriptionEnd: after3Days,
        packageId: 1,
        botId: bot.id,
      });
      this.em.save(sub);
    }
    return metadata.imageid;
  }

  async getAllBots(userId: number) {
    const currentDate = new Date();
    forkJoin([
      this.em.find(BotDb, {
        select: [
          'id',
          'loginFirstName',
          'loginLastName',
          'running',
          'uuid',
          'imageId',
        ],
        where: {
          userId: userId,
          subscriptions: { subscriptionEnd: MoreThan(currentDate) },
        },
      }),
      this.em.find(SharedBot, {
        select: [
          'id',
          'loginFirstName',
          'loginLastName',
          'running',
          'uuid',
          'imageId',
        ],
        where: {
          sharedBotUserSubscriptions: { userId: userId },
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
        return response;
      },
      error: (err) => {
        return err;
      },
    });
  }
  getBotConfiguration(data) {
    return new Promise((resolve, reject) => {
      return BotDb.findOne({
        attributes: [
          'id',
          'loginFirstName',
          'imageId',
          'loginLastName',
          'loginSpawnLocation',
          'loginRegion',
        ],
        where: {
          loginFirstName: data.botFirstName,
          loginLastName: data.botLastName,
          userId: data.userId,
        },
        include: {
          model: Subscription,
          attributes: ['subscriptionStart', 'subscriptionEnd'],
          include: [{ model: SubPackage, attributes: ['id', 'packageName'] }],
        },
      })
        .then((result) => {
          return resolve(result.dataValues);
        })
        .catch((err) => {
          console.error(err);
          return reject(err);
        });
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
          User.findOne({
            attributes: ['uuid', 'avatarName'],
            where: { id: userId },
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
  stopBot(botId: number, userId: number) {
    return new Promise((resolve, reject) => {
      return this.botInstances[botId]
        .close()
        .then(() => {
          this.botInstances[botId].isConnected = false;
          return BotDb.update(
            { running: false },
            { where: { id: botId, userId: userId } },
          )
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        })
        .catch((err: Error) => reject(err));
    });
  }
  async getSharedBots(userId: number) {
    const sharedBots = await this.em.find(SharedBot, {
      select: [
        'id',
        'loginFirstName',
        'loginLastName',
        'running',
        'uuid',
        'imageId',
        'sharedBotUserSubscriptions',
      ],
      where: { sharedBotUserSubscriptions: { userId: userId } },
    });
    return sharedBots;
  }
  getPackages() {
    return new Promise((resolve, reject) => {
      return SubPackage.findAll({
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
