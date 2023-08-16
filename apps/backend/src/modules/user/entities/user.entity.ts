import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BotDb } from '../../bot/entities/bot.entity';
import { SharedBotUserSubscription } from '../../shared-bot-user-subscription/entities/shared-bot-user-subscription.entity';
@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    nullable: false,
  })
  email: string;
  @Column({
    nullable: false,
  })
  password: string;
  @Column({
    name: 'refresh_token',
  })
  refreshToken: string;
  @Column({
    name: 'l$_balance',
  })
  l$Balance: number;
  @Column({
    unique: true,
  })
  uuid: string;
  @Column({
    name: 'avatar_name',
  })
  avatarName: string;

  @OneToMany(() => BotDb, (bot) => bot.userId)
  bots: BotDb[];

  @OneToMany(
    () => SharedBotUserSubscription,
    (sharedBotUserSubscription) => sharedBotUserSubscription.userId,
  )
  sharedBotUserSubscriptions: SharedBotUserSubscription[];
}
