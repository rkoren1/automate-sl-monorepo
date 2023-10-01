import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { SharedBot } from '../../shared-bot/entities/shared-bot.entity';

@Entity()
export class SharedBotUserSubscription {
  @PrimaryKey()
  id: number;
  @Property({
    type: 'int',
    nullable: false,
  })
  sharedBotId: number;
  @Property({
    type: 'date',
    nullable: true,
  })
  subscriptionStart: Date;
  @Property({
    type: 'date',
    nullable: true,
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
  userId: number;

  @ManyToOne(() => SharedBot)
  sharedBot: SharedBot;
}
