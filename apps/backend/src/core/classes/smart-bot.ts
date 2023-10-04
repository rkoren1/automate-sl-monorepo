import { BotOptionFlags, LoginParameters } from '@caspertech/node-metaverse';
import { BaseBot } from './base-bot';

export class SmartBot extends BaseBot {
  constructor(
    login: LoginParameters,
    options: BotOptionFlags,
    user: any,
    bot: any,
  ) {
    super(login, options, user, bot);
  }
}
