import { BotOptionFlags, LoginParameters } from '@caspertech/node-metaverse';
import { BaseBot } from './base-bot';
import type { BotDb, User } from '@prisma/client';

export class SmartBot extends BaseBot {
  constructor(
    login: LoginParameters,
    options: BotOptionFlags,
    user: User,
    bot: BotDb,
  ) {
    super(login, options, user, bot);
  }
}
