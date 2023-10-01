import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class DiscordSettings {
  @PrimaryKey()
  id: number;
  @Property({
    type: 'int',
    nullable: false,
  })
  botId: number;
  @Property({
    type: 'string',
  })
  webHookUrl: string;
  @Property({
    type: 'string',
  })
  slGroupUuid: string;
  @Property({
    type: 'string',
  })
  discChannelId: string;
}
