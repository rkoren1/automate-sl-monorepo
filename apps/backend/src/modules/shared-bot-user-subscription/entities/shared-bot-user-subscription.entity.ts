import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SharedBot } from "./SharedBot";

@Index("shared_bot_id", ["sharedBotId"], {})
@Entity("shared_bot_user_subscription", { schema: "automatesl" })
export class SharedBotUserSubscription {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "shared_bot_id" })
  sharedBotId: number;

  @Column("datetime", { name: "subscription_start", nullable: true })
  subscriptionStart: Date | null;

  @Column("datetime", { name: "subscription_end", nullable: true })
  subscriptionEnd: Date | null;

  @Column("int", { name: "package_id" })
  packageId: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(
    () => SharedBot,
    (sharedBot) => sharedBot.sharedBotUserSubscriptions,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shared_bot_id", referencedColumnName: "id" }])
  sharedBot: SharedBot;
}
