import { BotOptionFlags, LoginParameters } from '@caspertech/node-metaverse';
import { BotDb } from '../../modules/bot/entities/bot.entity';
import { BaseBot } from './base-bot';

export class SmartBot extends BaseBot {
  constructor(
    login: LoginParameters,
    options: BotOptionFlags,
    user: any,
    bot: BotDb,
  ) {
    super(login, options, user, bot);
  }
}
