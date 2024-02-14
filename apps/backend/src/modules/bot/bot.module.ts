import { Module } from '@nestjs/common';
import { PrismaService } from '../../providers/prisma.service';
import { BotController } from './bot.controller';
import { BotRepository } from './bot.repository';
import { BotService } from './bot.service';

@Module({
  controllers: [BotController],
  providers: [BotService, PrismaService, BotRepository],
  exports: [BotService],
})
export class BotModule {}
