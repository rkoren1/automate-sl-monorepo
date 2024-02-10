import { BotOptionFlags, LoginParameters } from '@caspertech/node-metaverse';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { BasicDiscBot } from './core/classes/basic-disc-bot';
import { SmartBot } from './core/classes/smart-bot';
import { BotService } from './modules/bot/bot.service';

@Injectable()
export class InitService implements OnModuleInit {
  @Inject(BotService)
  private readonly botService: BotService;
  private prisma = new PrismaClient();

  reviveBots() {
    const currentDate = new Date();
    this.prisma.botDb
      .findMany({
        where: {
          running: true,
          subscription: { some: { subscriptionEnd: { gt: currentDate } } },
        },
      })
      .then((runningBots) => {
        runningBots.forEach((bot) => {
          const loginParameters = new LoginParameters();
          loginParameters.firstName = bot.loginFirstName;
          loginParameters.lastName = bot.loginLastName;
          loginParameters.password = bot.loginPassword;
          loginParameters.start = bot.loginSpawnLocation; //region/x/y/z or home or last

          const options =
            BotOptionFlags.LiteObjectStore |
            BotOptionFlags.StoreMyAttachmentsOnly;
          //start bot
          let workerBot: BasicDiscBot | SmartBot;
          this.prisma.discordSettings
            .findMany({ where: { botId: bot.id } })
            .then((discordSettings) => {
              if (discordSettings.length > 0) {
                workerBot = new BasicDiscBot(
                  loginParameters,
                  options,
                  bot['user'].dataValues,
                  bot,
                  discordSettings[0],
                );
              } else {
                workerBot = new SmartBot(
                  loginParameters,
                  options,
                  bot['user'].dataValues,
                  bot,
                );
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
        });
      });
  }
  onModuleInit() {
    console.log('reviving bots');
    this.reviveBots();
  }
}
