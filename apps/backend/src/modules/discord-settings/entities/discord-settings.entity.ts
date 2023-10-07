import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DiscordSettings {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('int')
  botId: number;

  @Column('varchar', { nullable: true, length: 255 })
  webHookUrl: string | null;

  @Column('varchar', { nullable: true, length: 255 })
  slGroupUuid: string | null;

  @Column('varchar', { nullable: true, length: 255 })
  discChannelId: string | null;

  @Column('datetime')
  createdAt: Date;

  @Column('datetime')
  updatedAt: Date;
}
