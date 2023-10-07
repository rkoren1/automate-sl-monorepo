import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bot_log', { schema: 'automatesl' })
export class BotLog {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255 })
  botUuid: string;

  @Column('varchar', { length: 255 })
  message: string;

  @Column('varchar', { length: 255 })
  event: string;

  @Column('datetime')
  createdAt: Date;

  @Column('datetime')
  updatedAt: Date;
}
