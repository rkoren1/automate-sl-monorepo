import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtMiddleware } from './core/guards/jwt/jwt.middleware';
import { InitService } from './init.service';
import mikroOrmConfig from './mikro-orm.config';
import { AuthModule } from './modules/auth/auth.module';
import { BotLogModule } from './modules/bot-log/bot-log.module';
import { BotLog } from './modules/bot-log/entities/bot-log.entity';
import { BotModule } from './modules/bot/bot.module';
import { BotDb } from './modules/bot/entities/bot.entity';
import { DiscordSettingsModule } from './modules/discord-settings/discord-settings.module';
import { DiscordSettings } from './modules/discord-settings/entities/discord-setting.entity';
import { Package } from './modules/package/entities/package.entity';
import { PackageModule } from './modules/package/package.module';
import { PaymentLog } from './modules/payment/entities/payment-log.entity';
import { PaymentModule } from './modules/payment/payment.module';
import { SharedBotUserSubscription } from './modules/shared-bot-user-subscription/entities/shared-bot-user-subscription.entity';
import { SharedBotUserSubscriptionModule } from './modules/shared-bot-user-subscription/shared-bot-user-subscription.module';
import { SharedBot } from './modules/shared-bot/entities/shared-bot.entity';
import { SharedBotModule } from './modules/shared-bot/shared-bot.module';
import { Subscription } from './modules/subscription/entities/subscription.entity';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { Terminal } from './modules/terminal/entities/terminal.entity';
import { TerminalModule } from './modules/terminal/terminal.module';
import { User } from './modules/user/entities/user.entity';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      ...mikroOrmConfig,
      autoLoadEntities: true,
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
      discovery: { disableDynamicFileAccess: true },
    }),
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
