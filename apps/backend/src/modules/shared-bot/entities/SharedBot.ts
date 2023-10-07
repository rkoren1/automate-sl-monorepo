import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SharedBotUserSubscription } from "./SharedBotUserSubscription";

@Entity("shared_bot", { schema: "automatesl" })
export class SharedBot {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "login_first_name", length: 255 })
  loginFirstName: string;

  @Column("varchar", { name: "login_last_name", length: 255 })
  loginLastName: string;

  @Column("varchar", { name: "login_password", length: 255 })
  loginPassword: string;

  @Column("varchar", { name: "login_spawn_location", length: 255 })
  loginSpawnLocation: string;

  @Column("tinyint", { name: "running", width: 1 })
  running: boolean;

  @Column("varchar", { name: "login_region", nullable: true, length: 255 })
  loginRegion: string | null;

  @Column("int", { name: "package_id", nullable: true })
  packageId: number | null;

  @Column("varchar", { name: "uuid", length: 36 })
  uuid: string;

  @Column("varchar", { name: "image_id", length: 36 })
  imageId: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @OneToMany(
    () => SharedBotUserSubscription,
    (sharedBotUserSubscription) => sharedBotUserSubscription.sharedBot
  )
  sharedBotUserSubscriptions: SharedBotUserSubscription[];
}
