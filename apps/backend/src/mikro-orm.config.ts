import { Options, UnderscoreNamingStrategy } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as dotenv from 'dotenv';
import { BotLog } from './modules/bot-log/entities/bot-log.entity';
import { BotDb } from './modules/bot/entities/bot.entity';
import { DiscordSettings } from './modules/discord-settings/entities/discord-setting.entity';
import { Package } from './modules/package/entities/package.entity';
import { PaymentLog } from './modules/payment/entities/payment-log.entity';
import { SharedBotUserSubscription } from './modules/shared-bot-user-subscription/entities/shared-bot-user-subscription.entity';
import { SharedBot } from './modules/shared-bot/entities/shared-bot.entity';
import { Subscription } from './modules/subscription/entities/subscription.entity';
import { Terminal } from './modules/terminal/entities/terminal.entity';
import { User } from './modules/user/entities/user.entity';

dotenv.config();
const mikroOrmConfig: Options = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'secondlifedev123',
  dbName: 'automatesl',
  namingStrategy: UnderscoreNamingStrategy,
  migrations: {
    path: './migrations',
    glob: '!(*.d).{js,ts}',
  },
  metadataProvider: TsMorphMetadataProvider,
  entities: [
    User,
    BotDb,
    SharedBot,
    PaymentLog,
    Subscription,
    SharedBotUserSubscription,
    DiscordSettings,
    Package,
    Terminal,
    BotLog,
  ],
};

export default mikroOrmConfig;
