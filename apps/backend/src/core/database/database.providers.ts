import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST } from '../../constants';
import { BotDb } from '../../modules/bot/entities/bot.entity';
import { DiscordSettings } from '../../modules/discord-settings/entities/discord-setting.entity';
import { Package } from '../../modules/package/entities/package.entity';
import { PaymentLog } from '../../modules/payment/entities/payment-log.entity';
import { SharedBotUserSubscription } from '../../modules/shared-bot-user-subscription/entities/shared-bot-user-subscription.entity';
import { SharedBot } from '../../modules/shared-bot/entities/shared-bot.entity';
import { Subscription } from '../../modules/subscription/entities/subscription.entity';
import { TerminalOwner } from '../../modules/terminal/entities/terminal-owner.entity';
import { Terminal } from '../../modules/terminal/entities/terminal.entity';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      console.log(sequelize.models);
      sequelize.addModels([
        Terminal,
        SharedBot,
        Subscription,
        SharedBotUserSubscription,
        PaymentLog,
        Package,
        DiscordSettings,
        TerminalOwner,
        BotDb,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
