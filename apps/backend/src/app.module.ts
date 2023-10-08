import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtMiddleware } from './core/guards/jwt/jwt.middleware';
import { InitService } from './init.service';
import { AuthModule } from './modules/auth/auth.module';
import { BotLogModule } from './modules/bot-log/bot-log.module';
import { BotLog } from './modules/bot-log/entities/bot-log.entity';
import { BotModule } from './modules/bot/bot.module';
import { BotDb } from './modules/bot/entities/bot.entity';
import { DiscordSettingsModule } from './modules/discord-settings/discord-settings.module';
import { DiscordSettings } from './modules/discord-settings/entities/discord-settings.entity';
import { SubPackage } from './modules/package/entities/sub-package.entity';
import { PackageModule } from './modules/package/package.module';
import { PaymentLog } from './modules/payment/entities/payment-log.entity';
import { PaymentModule } from './modules/payment/payment.module';
import { SharedBotUserSubscription } from './modules/shared-bot-user-subscription/entities/shared-bot-user-subscription.entity';
import { SharedBotUserSubscriptionModule } from './modules/shared-bot-user-subscription/shared-bot-user-subscription.module';
import { SharedBot } from './modules/shared-bot/entities/shared-bot.entity';
import { SharedBotModule } from './modules/shared-bot/shared-bot.module';
import { Subscription } from './modules/subscription/entities/subscription.entity';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { TerminalOwner } from './modules/terminal/entities/terminal-owner.entity';
import { Terminal } from './modules/terminal/entities/terminal.entity';
import { TerminalModule } from './modules/terminal/terminal.module';
import { User } from './modules/user/entities/user.entity';
import { UserModule } from './modules/user/user.module';

dotenv.config();
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, './automatesl.client'),
    }),
    BotModule,
    UserModule,
    TerminalModule,
    SharedBotModule,
    SubscriptionModule,
    SharedBotUserSubscriptionModule,
    PaymentModule,
    PackageModule,
    DiscordSettingsModule,
    BotLogModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      entities: [
        BotDb,
        User,
        Subscription,
        SubPackage,
        Terminal,
        TerminalOwner,
        BotLog,
        DiscordSettings,
        PaymentLog,
        SharedBot,
        SharedBotUserSubscription,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, InitService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude('user/(.*)', 'terminal/(.*)', 'uptime', 'refreshtoken')
      .forRoutes('*');
  }
}
