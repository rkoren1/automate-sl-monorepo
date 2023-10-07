import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("terminal_owner", { schema: "automatesl" })
export class TerminalOwner {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "avatar_uuid", length: 255 })
  avatarUuid: string;

  @Column("varchar", { name: "avatar_name", length: 255 })
  avatarName: string;

  @Column("varchar", { name: "parcel_name", length: 255 })
  parcelName: string;

  @Column("varchar", { name: "sl_url", length: 255 })
  slUrl: string;

  @Column("datetime", { name: "last_active" })
  lastActive: Date;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;
}
