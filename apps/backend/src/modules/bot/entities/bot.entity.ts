import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subscription } from '../../subscription/entities/subscription.entity';
import { User } from '../../user/entities/user.entity';

@Index('userId', ['userId'], {})
@Entity()
export class BotDb {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('tinyint', { width: 1 })
  running: boolean;

  @Column('varchar', { length: 36 })
  uuid: string;

  @Column('int', { nullable: true })
  actionId: number | null;

  @Column('datetime', { nullable: true })
  createdAt: Date | null;

  @Column('varchar', { length: 36 })
  imageId: string;

  @Column('varchar', { length: 255 })
  loginFirstName: string;

  @Column('varchar', { length: 255 })
  loginLastName: string;

  @Column('varchar', { length: 255 })
  loginPassword: string;

  @Column('varchar', { nullable: true, length: 255 })
  loginRegion: string | null;

  @Column('varchar', { length: 255 })
  loginSpawnLocation: string;

  @Column('int', { nullable: true })
  packageId: number | null;

  @Column('tinyint', { nullable: true, width: 1 })
  shouldRun: boolean | null;

  @Column('datetime', { nullable: true })
  updatedAt: Date | null;

  @Column('int')
  userId: number;

  @ManyToOne(() => User, (user) => user.bots, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: User;

  @OneToMany(() => Subscription, (subscription) => subscription.bot)
  subscriptions: Subscription[];
}
