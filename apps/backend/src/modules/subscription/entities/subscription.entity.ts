import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BotDb } from '../../bot/entities/bot.entity';
import { SubPackage } from '../../package/entities/sub-package.entity';

@Index('subscriptionPackageIdBotId_unique', ['packageId', 'botId'], {
  unique: true,
})
@Index('botId', ['botId'], {})
@Entity('subscription', { schema: 'automatesl' })
export class Subscription {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int')
  botId: number;

  @Column('datetime', { nullable: true })
  createdAt: Date | null;

  @Column('int')
  packageId: number;

  @Column('datetime')
  subscriptionEnd: Date;

  @Column('datetime')
  subscriptionStart: Date;

  @Column('datetime', { nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => SubPackage, (subPackage) => subPackage.subscriptions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'packageId', referencedColumnName: 'id' }])
  package: SubPackage;

  @ManyToOne(() => BotDb, (botDb) => botDb.subscriptions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'botId', referencedColumnName: 'id' }])
  bot: BotDb;
}
