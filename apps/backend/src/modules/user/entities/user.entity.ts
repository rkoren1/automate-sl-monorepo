import { BotDb } from '../../bot/entities/bot.entity';
import { SharedBotUserSubscription } from '../../shared-bot-user-subscription/entities/shared-bot-user-subscription.entity';
import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
@Entity()
export class User {
  @PrimaryKey({
    type: 'int',
    autoincrement: true,
  })
  id: number;
  @Property({
    type: 'string',
    nullable: false,
  })
  email: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  password: string;
  @Property({
    type: 'string',
  })
  refreshToken: string;
  @Property({
    type: 'int',
  })
  l$Balance: number;
  @Property({
    type: 'string',
    unique: 'uuid',
  })
  uuid: string;
  @Property({
    type: 'string',
  })
  avatarName: string;
}
