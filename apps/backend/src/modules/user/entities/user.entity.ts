import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class User {
  @PrimaryKey({
    type: 'int',
    autoincrement: true,
  })
  id: number;
  @Property({
    type: 'string',
    nullable: false,
  })
  email: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  password: string;
  @Property({
    type: 'string',
  })
  refreshToken: string;
  @Property({
    type: 'int',
  })
  l$Balance: number;
  @Property({
    type: 'string',
    unique: 'uuid',
  })
  uuid: string;
  @Property({
    type: 'string',
  })
  avatarName: string;

  constructor(
    email: string,
    password: string,
    refreshToken?: string,
    l$Balance?: number,
    uuid?: string,
    avatarName?: string,
  ) {
    this.email = email;
    this.password = password;
    this.refreshToken = refreshToken;
    this.l$Balance = l$Balance;
    this.uuid = uuid;
    this.avatarName = avatarName;
  }
}
