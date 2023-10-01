import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class PaymentLog {
  @PrimaryKey()
  id: number;
  @Property({
    type: 'string',
    nullable: false,
  })
  userUuid: string;
  @Property({
    type: 'int',
  })
  amount: number;
}
