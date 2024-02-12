import {
  Bot,
  BotOptionFlags,
  LoginParameters,
} from '@caspertech/node-metaverse';
import { EntityManager } from '@mikro-orm/mysql';
import { Injectable } from '@nestjs/common';
import { forkJoin } from 'rxjs';
import * as urlMetadata from 'url-metadata';
import { BasicDiscBot } from '../../core/classes/basic-disc-bot';
import { SmartBot } from '../../core/classes/smart-bot';
import { DiscordSettings } from '../discord-settings/entities/discord-setting.entity';
import { Package } from '../package/entities/package.entity';
import { SharedBotUserSubscription } from '../shared-bot-user-subscription/entities/shared-bot-user-subscription.entity';
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
  botInstances = new Array<SmartBot | BasicDiscBot>();

  constructor(private em: EntityManager) {}
  slAccountExists(firstName: string, lastName: string, password: string) {
    const loginParams: LoginParameters = new LoginParameters();
    loginParams.firstName = firstName;
    loginParams.lastName = lastName;
    loginParams.password = password;
    loginParams.start = 'last';
    const bot: Bot = new Bot(loginParams, BotOptionFlags.None);
    return bot
      .login()
      .then((res) => {
        return res.agent.agentID['mUUID'];
      })
      .catch(() => {
        return false;
      });
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

            const bot = this.em.create(BotDb, {
              userId: createBotDto.userId,
              loginFirstName: createBotDto.loginFirstName,
              loginLastName: createBotDto.loginLastName,
              encryptPassword: createBotDto.loginPassword,
              running: false,
              shouldRun: false,
              loginSpawnLocation: createBotDto.loginSpawnLocation,
              loginRegion: createBotDto.loginRegion,
              uuid: uuid,
              imageId: metadata.imageid,
            });
            this.em
              .persistAndFlush(bot)
              .then(() => {
                this.em
                  .find(BotDb, { userId: createBotDto.userId })
                  .then((userBots) => {
                    //if this is the only bot give 3 days of free subscription
                    if (userBots.length < 2) {
                      Subscription.create({
                        subscriptionStart: currentDate,
                        subscriptionEnd: after3Days,
                        packageId: 1,
                        botId: bot.id,
                      }).catch((err) => console.error(err));
                    }
                    return resolve(metadata.imageid);
                  });
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
        this.em.find(BotDb, { userId: userId }),
        //TODO fix subscription
        /*  BotDb.findAll({
          attributes: [
            'id',
            'loginFirstName',
            'loginLastName',
            'running',
            'uuid',
            'imageId',
          ],
          include: {
            model: Subscription,
            where: { subscriptionEnd: { [Op.gt]: currentDate } },
            required: false,
          },
          where: { userId: userId },
        }), */
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
    const bot = await this.em.findOne(BotDb, {
      loginFirstName: data.botFirstName,
      loginLastName: data.botLastName,
      userId: data.userId,
    });
    return bot;
    //TODO fix subsriction
    /* return new Promise((resolve, reject) => {

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
          include: [{ model: Package, attributes: ['id', 'packageName'] }],
        },
      })
        .then((result) => {
          return resolve(result.dataValues);
        })
        .catch((err) => {
          console.error(err);
          return reject(err);
        });
    }); */
  }
  async startBot(botId: number, userId: number) {
    const bot = await this.em.findOne(BotDb, { id: botId, userId: userId });
    if (
      bot.loginFirstName === null ||
      bot.loginPassword === null ||
      bot.loginSpawnLocation === null
    )
      return { changedRows: 0 };

    const loginParameters = new LoginParameters();
    loginParameters.firstName = bot.loginFirstName;
    loginParameters.lastName = bot.loginLastName;
    loginParameters.password = bot.loginPassword;
    loginParameters.start = bot.loginSpawnLocation; //region/x/y/z or home or last

    const options =
      BotOptionFlags.LiteObjectStore | BotOptionFlags.StoreMyAttachmentsOnly;

    //get User uuid
    const user = await this.em.findOneOrFail(
      User,
      { id: userId },
      { fields: ['uuid', 'avatarName'] },
    );
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
            .then(async () => {
              workerBot.isConnected = true;
              this.botInstances[botId] = workerBot;
              bot.running = true;
              await this.em.persistAndFlush(bot);
              return bot;
            })
            .catch((err: Error) => {
              console.error(err);
              return err;
            });
        } else {
          //start bot
          const workerBot = new SmartBot(loginParameters, options, user, bot);
          return workerBot
            .login()
            .then(() => workerBot.connectToSim())
            .then(async () => {
              this.botInstances[botId] = workerBot;
              bot.running = true;
              await this.em.persistAndFlush(bot);
              return bot;
            })
            .catch((err: Error) => {
              console.error(err);
              return err;
            });
        }
      },
    );
  }
  async stopBot(botId: number, userId: number) {
    try {
      await this.botInstances[botId].close();
      this.botInstances[botId].isConnected = false;
      const bot = await this.em.findOneOrFail(BotDb, {
        id: botId,
        userId: userId,
      });
      bot.running = false;
      await this.em.persistAndFlush(bot);
      return await bot;
    } catch (err) {
      return err;
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
  async setBotConfiguration(data: SetBotConfigurationBodyDto) {
    const bot = await this.em.findOneOrFail(BotDb, { id: data.botId });
    bot.loginRegion = data.loginRegion;
    bot.loginSpawnLocation = data.loginSpawnLocation;
    await this.em.persistAndFlush(bot);
    return bot;
  }
  async refreshBotStatus(botId: number) {
    const bot = await this.em.findOne(BotDb, { id: botId });
    //if bot doesnt exist and is running set running to false
    if (!this.botInstances[botId] && bot.running) {
      bot.running = false;
      await this.em.persistAndFlush(bot);
      return true;
    }
    //else check if bot is offline and set running to false
    if (this.botInstances[botId]?.isConnected) {
      bot.running = false;
      await this.em.persistAndFlush(bot);
      return true;
    }
    return true;
  }
}
