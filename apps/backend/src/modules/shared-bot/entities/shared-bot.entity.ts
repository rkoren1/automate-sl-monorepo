import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { SharedBotUserSubscription } from '../../shared-bot-user-subscription/entities/shared-bot-user-subscription.entity';

@Entity()
export class SharedBot {
  @PrimaryKey()
  id: number;
  @Property({
    type: 'string',
    nullable: false,
  })
  loginFirstName: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  loginLastName: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  loginPassword: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  loginSpawnLocation: string;
  @Property({
    type: 'boolean',
    nullable: false,
  })
  running: boolean;
  @Property({
    type: 'string',
  })
  loginRegion: string;
  @Property({
    type: 'int',
    nullable: true,
  })
  packageId: number;
  @Property({
    type: 'string',
    nullable: false,
  })
  uuid: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  imageId: string;

  @OneToMany(
    () => SharedBotUserSubscription,
    (sharedBotUserSubscription) => sharedBotUserSubscription.sharedBot,
  )
  sharedBotUserSubscriptions = new Collection<SharedBotUserSubscription>(this);
}
