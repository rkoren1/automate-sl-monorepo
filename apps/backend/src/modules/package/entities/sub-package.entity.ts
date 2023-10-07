import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Coupon } from '../../entities/Coupon';
import { SharedBotUserSubscription } from '../../shared-bot-user-subscription/entities/shared-bot-user-subscription.entity';
import { Subscription } from '../../subscription/entities/subscription.entity';

@Index('couponId', ['couponId'], {})
@Entity()
export class SubPackage {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('int')
  discount: number;

  @Column('int', { nullable: true })
  couponId: number | null;

  @Column('datetime', { nullable: true })
  createdAt: Date | null;

  @Column('varchar', {
    nullable: true,
    length: 255,
  })
  packageDescription: string | null;

  @Column('varchar', { length: 255 })
  packageName: string;

  @Column('int')
  pricePerMonth: number;

  @Column('int')
  pricePerWeek: number;

  @Column('datetime', { nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Coupon, (coupon) => coupon.packages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'couponId', referencedColumnName: 'id' }])
  coupon: Coupon;

  @OneToMany(
    () => SharedBotUserSubscription,
    (sharedBotUserSubscription) => sharedBotUserSubscription.package,
  )
  sharedBotUserSubscriptions: SharedBotUserSubscription[];

  @OneToMany(() => Subscription, (subscription) => subscription.package)
  subscriptions: Subscription[];
}
