import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subscription } from './Subscription';
import { User } from './User';

@Index('userId', ['userId'], {})
@Entity('bot', { schema: 'automatesl' })
export class BotDb {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('tinyint', { name: 'running', width: 1 })
  running: boolean;

  @Column('varchar', { name: 'uuid', length: 36 })
  uuid: string;

  @Column('int', { name: 'actionId', nullable: true })
  actionId: number | null;

  @Column('datetime', { name: 'createdAt', nullable: true })
  createdAt: Date | null;

  @Column('varchar', { name: 'imageId', length: 36 })
  imageId: string;

  @Column('varchar', { name: 'loginFirstName', length: 255 })
  loginFirstName: string;

  @Column('varchar', { name: 'loginLastName', length: 255 })
  loginLastName: string;

  @Column('varchar', { name: 'loginPassword', length: 255 })
  loginPassword: string;

  @Column('varchar', { name: 'loginRegion', nullable: true, length: 255 })
  loginRegion: string | null;

  @Column('varchar', { name: 'loginSpawnLocation', length: 255 })
  loginSpawnLocation: string;

  @Column('int', { name: 'packageId', nullable: true })
  packageId: number | null;

  @Column('tinyint', { name: 'shouldRun', nullable: true, width: 1 })
  shouldRun: boolean | null;

  @Column('datetime', { name: 'updatedAt', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'userId' })
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
