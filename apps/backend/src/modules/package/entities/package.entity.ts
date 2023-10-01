import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Subscription } from '../../subscription/entities/subscription.entity';

@Entity()
export class Package {
  @PrimaryKey()
  id: number;
  @Property({
    type: 'string',
    nullable: false,
  })
  packageName: string;
  @Property({
    type: 'string',
  })
  packageDescription: string;
  @Property({
    type: 'int',
    nullable: false,
  })
  pricePerWeek: number;
  @Property({
    type: 'int',
    nullable: false,
  })
  discount: number;
  @Property({
    type: 'int',
    nullable: false,
  })
  pricePerMonth: number;
  @Property({
    type: 'int',
  })
  couponId: number;

  @OneToMany(() => Subscription, (subscription) => subscription.package)
  subscriptions = new Collection<Subscription>(this);
}
