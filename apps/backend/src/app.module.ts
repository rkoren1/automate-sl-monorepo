import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { JwtMiddleware } from './core/guards/jwt/jwt.middleware';
import { InitService } from './init.service';
import { AuthModule } from './modules/auth/auth.module';
import { BotLogModule } from './modules/bot-log/bot-log.module';
import { BotModule } from './modules/bot/bot.module';
import { DiscordSettingsModule } from './modules/discord-settings/discord-settings.module';
import { PackageModule } from './modules/package/package.module';
import { PaymentModule } from './modules/payment/payment.module';
import { SharedBotUserSubscriptionModule } from './modules/shared-bot-user-subscription/shared-bot-user-subscription.module';
import { SharedBotModule } from './modules/shared-bot/shared-bot.module';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { TerminalModule } from './modules/terminal/terminal.module';
import { UserModule } from './modules/user/user.module';

dotenv.config();
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, './automatesl.client'),
    }),
    DatabaseModule,
    DatabaseModule,
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
      autoLoadEntities: true,
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
