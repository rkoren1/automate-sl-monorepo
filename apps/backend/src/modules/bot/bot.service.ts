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
              loginPassword: createBotDto.loginPassword,
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
                  .then(async (userBots) => {
                    //if this is the only bot give 3 days of free subscription
                    if (userBots.length < 2) {
                      const createSub = this.em.create(Subscription, {
                        subscriptionStart: currentDate,
                        subscriptionEnd: after3Days,
                        packageId: 1,
                        botId: bot.id,
                      });
                      await this.em.persistAndFlush(createSub);
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
        this.em.find(
          BotDb,
          {
            userId: userId,
            subscriptions: { subscriptionEnd: { $gt: currentDate } },
          },
          { fields: ['*', 'subscriptions'] },
        ),
        this.em.find(
          SharedBot,
          { sharedBotUserSubscriptions: { userId: userId } },
          {
            fields: [
              'id',
              'loginFirstName',
              'loginLastName',
              'running',
              'uuid',
              'imageId',
            ],
          },
        ),
      ]).subscribe({
        next: (result) => {
          const response: GetBotDto = { my: [], shared: [] };
          result[0].forEach((ele) => {
            ele.subscriptions.init();
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
    //TODO CHECK IF IT WORKS
    const bot = await this.em.findOne(
      BotDb,
      {
        loginFirstName: data.botFirstName,
        loginLastName: data.botLastName,
        userId: data.userId,
      },
      {
        fields: [
          'id',
          'loginFirstName',
          'imageId',
          'loginLastName',
          'loginSpawnLocation',
          'loginRegion',
          'subscriptions.subscriptionStart',
          'subscriptions.subscriptionEnd',
          'subscriptions.package.id',
          'subscriptions.package.packageName',
        ],
      },
    );
    return bot;
  }
  async startBot(botId: number, userId: number) {
    const bot = await this.em.findOne(BotDb, { id: botId, userId: userId });
    if (
      bot.loginFirstName === null ||
      bot.decryptedPassword === null ||
      bot.loginSpawnLocation === null
    )
      return { changedRows: 0 };

    const loginParameters = new LoginParameters();
    loginParameters.firstName = bot.loginFirstName;
    loginParameters.lastName = bot.loginLastName;
    loginParameters.password = bot.decryptedPassword;
    loginParameters.start = bot.loginSpawnLocation; //region/x/y/z or home or last

    const options =
      BotOptionFlags.LiteObjectStore | BotOptionFlags.StoreMyAttachmentsOnly;

    //get User uuid
    const user = await this.em.findOneOrFail(User, { id: userId });
    const discordSettings = await this.em.find(DiscordSettings, {
      botId: botId,
    });
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
  async getSharedBots(userId: number) {
    return await this.em.find(
      SharedBot,
      { sharedBotUserSubscriptions: { userId: userId } },
      {
        fields: [
          'id',
          'loginFirstName',
          'loginLastName',
          'running',
          'uuid',
          'imageId',
        ],
      },
    );
  }
  async getPackages() {
    const packages = await this.em.find(Package, {});
    return packages;
  }

  async getDiscordSettings(botId: number) {
    return await this.em.find(
      DiscordSettings,
      { botId: botId },
      { fields: ['id', 'webHookUrl', 'slGroupUuid', 'discChannelId'] },
    );
  }
  async setDiscordSettings(data: SetDiscordSettingsBodyDto) {
    const discSettings = await this.em.upsert(DiscordSettings, {
      id: data.id,
      botId: data.botId,
      discChannelId: data.discChannelId,
      webHookUrl: data.webHookUrl,
      slGroupUuid: data.slGroupUuid,
    });
    return discSettings;
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
    if (!this.botInstances[botId]?.isConnected) {
      bot.running = false;
      await this.em.persistAndFlush(bot);
      return true;
    }
    return true;
  }
}
