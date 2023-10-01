import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class TerminalOwner {
  @PrimaryKey()
  id: number;
  @Property({
    type: 'string',
    nullable: false,
  })
  avatarUuid: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  avatarName: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  parcelName: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  slUrl: string;
  @Property({
    type: 'datetime',
    nullable: false,
  })
  lastActive: Date;
}
