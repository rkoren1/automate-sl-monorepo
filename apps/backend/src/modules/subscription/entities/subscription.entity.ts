import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { BotDb } from '../../bot/entities/bot.entity';
import { Package } from '../../package/entities/package.entity';

@Entity()
export class Subscription {
  @PrimaryKey()
  id: number;
  @Property({
    type: 'date',
    nullable: false,
  })
  subscriptionStart: Date;
  @Property({
    type: 'date',
    nullable: false,
  })
  subscriptionEnd: Date;
  @Property({
    type: 'int',
    nullable: false,
  })
  packageId: number;
  @Property({
    type: 'int',
    nullable: false,
  })
  botId: number;

  @ManyToOne(() => BotDb)
  bot: BotDb;

  @ManyToOne(() => Package)
  package: Package;
}
