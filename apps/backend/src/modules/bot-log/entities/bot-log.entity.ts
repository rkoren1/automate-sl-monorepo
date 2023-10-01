import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class BotLog {
  @PrimaryKey()
  id: number;
  @Property({
    type: 'string',
    nullable: false,
  })
  name: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  botUuid: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  message: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  event: string;
}
