import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('terminal_owner', { schema: 'automatesl' })
export class TerminalOwner {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar')
  avatarUuid: string;

  @Column('varchar')
  avatarName: string;

  @Column('varchar')
  parcelName: string;

  @Column('varchar')
  slUrl: string;

  @Column('datetime')
  lastActive: Date;

  @Column('datetime')
  createdAt: Date;

  @Column('datetime')
  updatedAt: Date;
}
