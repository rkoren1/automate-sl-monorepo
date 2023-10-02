import { BotOptionFlags, LoginParameters } from '@caspertech/node-metaverse';
import { EntityManager } from '@mikro-orm/mysql';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { BasicDiscBot } from './core/classes/basic-disc-bot';
import { SmartBot } from './core/classes/smart-bot';
import { BotService } from './modules/bot/bot.service';
import { BotDb } from './modules/bot/entities/bot.entity';
import { DiscordSettings } from './modules/discord-settings/entities/discord-setting.entity';

@Injectable()
export class InitService implements OnModuleInit {
  constructor(private em: EntityManager) {}
  @Inject(BotService)
  private readonly botService: BotService;

  async reviveBots() {
    const currentDate = new Date();
    const emFork1 = this.em.fork();
    const runningBots = await emFork1.find(BotDb, {
      running: true,
      subscriptions: { subscriptionEnd: { $gt: currentDate } },
    });
    await runningBots.forEach(async (bot) => {
      const loginParameters = new LoginParameters();
      loginParameters.firstName = bot.loginFirstName;
      loginParameters.lastName = bot.loginLastName;
      loginParameters.password = bot.loginPassword;
      loginParameters.start = bot.loginSpawnLocation; //region/x/y/z or home or last

      const options =
        BotOptionFlags.LiteObjectStore | BotOptionFlags.StoreMyAttachmentsOnly;
      //start bot
      let workerBot: BasicDiscBot | SmartBot;
      const emFork = this.em.fork();
      const discordSettings = await emFork.find(DiscordSettings, {
        botId: bot.id,
      });
      if (discordSettings.length > 0) {
        workerBot = new BasicDiscBot(
          loginParameters,
          options,
          bot.user,
          bot,
          discordSettings[0],
        );
      } else {
        workerBot = new SmartBot(loginParameters, options, bot.user, bot);
      }
      workerBot
        .login()
        .then(() => workerBot.connectToSim())
        .then(() => {
          workerBot.isConnected = true;
          this.botService.botInstances[bot.id] = workerBot;
        })
        .catch((err) => console.error(err));
    });
  }
  onModuleInit() {
    console.log('reviving bots');
    this.reviveBots();
  }
}
