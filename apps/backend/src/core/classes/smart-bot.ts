import { BotOptionFlags, LoginParameters } from '@caspertech/node-metaverse';
import { bot, user } from '@prisma/client';
import { BaseBot } from './base-bot';

export class SmartBot extends BaseBot {
  constructor(
    login: LoginParameters,
    options: BotOptionFlags,
    user: user,
    bot: bot,
  ) {
    super(login, options, user, bot);
  }
}
