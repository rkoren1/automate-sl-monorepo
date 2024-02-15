import { BotOptionFlags, LoginParameters } from '@caspertech/node-metaverse';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { BasicDiscBot } from '../core/classes/basic-disc-bot';
import { SmartBot } from '../core/classes/smart-bot';
import { BotRepository } from '../modules/bot/bot.repository';
import { BotService } from '../modules/bot/bot.service';
import { PrismaService } from './prisma.service';

@Injectable()
export class InitService implements OnModuleInit {
  constructor(
    private readonly botService: BotService,
    private botRepo: BotRepository,
    private prisma: PrismaService,
  ) {}

  reviveBots() {
    const currentDate = new Date();
    this.botRepo
      .findManyInclude({
        where: {
          running: true,
          subscriptions: { some: { subscriptionEnd: { gt: currentDate } } },
        },
        include: { user: true },
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
                const { user: userValue, ...botValues } = bot;
                workerBot = new BasicDiscBot(
                  loginParameters,
                  options,
                  userValue,
                  botValues,
                  discordSettings[0],
                );
              } else {
                const { user: userValue, ...botValues } = bot;
                workerBot = new SmartBot(
                  loginParameters,
                  options,
                  userValue,
                  botValues,
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
