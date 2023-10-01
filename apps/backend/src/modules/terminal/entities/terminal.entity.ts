import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Terminal {
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
  apiKey: string;
}
