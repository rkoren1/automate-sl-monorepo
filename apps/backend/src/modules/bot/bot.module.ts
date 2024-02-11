import { Module } from '@nestjs/common';
import { PrismaService } from '../../providers/prisma.service';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';

@Module({
  controllers: [BotController],
  providers: [BotService, PrismaService],
  exports: [BotService],
})
export class BotModule {}
