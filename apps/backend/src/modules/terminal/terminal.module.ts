import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TerminalApikeyMiddleware } from '../../core/guards/terminal-apikey/terminal-apikey.middleware';
import { PrismaService } from '../../providers/prisma.service';
import { TerminalController } from './terminal.controller';
import { TerminalService } from './terminal.service';

@Module({
  controllers: [TerminalController],
  providers: [TerminalService, PrismaService],
})
export class TerminalModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TerminalApikeyMiddleware).forRoutes('/terminal');
  }
}
