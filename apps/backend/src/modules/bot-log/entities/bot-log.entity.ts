import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bot_log", { schema: "automatesl" })
export class BotLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "bot_uuid", length: 255 })
  botUuid: string;

  @Column("varchar", { name: "message", length: 255 })
  message: string;

  @Column("varchar", { name: "event", length: 255 })
  event: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;
}
