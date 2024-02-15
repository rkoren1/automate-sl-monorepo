import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { JwtMiddleware } from './core/guards/jwt/jwt.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { BotLogModule } from './modules/bot-log/bot-log.module';
import { BotModule } from './modules/bot/bot.module';
import { BotRepository } from './modules/bot/bot.repository';
import { DiscordSettingsModule } from './modules/discord-settings/discord-settings.module';
import { PackageModule } from './modules/package/package.module';
import { PaymentModule } from './modules/payment/payment.module';
import { SharedBotUserSubscriptionModule } from './modules/shared-bot-user-subscription/shared-bot-user-subscription.module';
import { SharedBotModule } from './modules/shared-bot/shared-bot.module';
import { SubscriptionModule } from './modules/subscription/subscription.module';
import { TerminalModule } from './modules/terminal/terminal.module';
import { UserModule } from './modules/user/user.module';
import { InitService } from './providers/init.service';
import { PrismaService } from './providers/prisma.service';

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
  ],
  controllers: [AppController],
  providers: [InitService, PrismaService, BotRepository],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude('user/(.*)', 'terminal/(.*)', 'uptime', 'refreshtoken')
      .forRoutes('*');
  }
}
