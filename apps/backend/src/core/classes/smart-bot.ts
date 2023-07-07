import { BotOptionFlags, LoginParameters } from '@caspertech/node-metaverse';
import { BotDb } from '../../modules/bot/entities/bot.entity';
import { User } from '../../modules/user/entities/user.entity';
import { BaseBot } from './base-bot';

export class SmartBot extends BaseBot {
  constructor(
    login: LoginParameters,
    options: BotOptionFlags,
    user: User,
    bot: BotDb
  ) {
    super(login, options, user, bot);
  }
}
