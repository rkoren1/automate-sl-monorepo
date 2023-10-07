import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("discord_settings", { schema: "automatesl" })
export class DiscordSettings {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bot_id" })
  botId: number;

  @Column("varchar", { name: "web_hook_url", nullable: true, length: 255 })
  webHookUrl: string | null;

  @Column("varchar", { name: "sl_group_uuid", nullable: true, length: 255 })
  slGroupUuid: string | null;

  @Column("varchar", { name: "disc_channel_id", nullable: true, length: 255 })
  discChannelId: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;
}
