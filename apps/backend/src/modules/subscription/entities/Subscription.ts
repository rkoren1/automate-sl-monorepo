import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Package } from "./Package";
import { Bot } from "./Bot";

@Index("subscriptionPackageIdBotId_unique", ["packageId", "botId"], {
  unique: true,
})
@Index("botId", ["botId"], {})
@Entity("subscription", { schema: "automatesl" })
export class Subscription {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "botId" })
  botId: number;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("int", { name: "packageId" })
  packageId: number;

  @Column("datetime", { name: "subscriptionEnd" })
  subscriptionEnd: Date;

  @Column("datetime", { name: "subscriptionStart" })
  subscriptionStart: Date;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Package, (package) => package.subscriptions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "packageId", referencedColumnName: "id" }])
  package: Package;

  @ManyToOne(() => Bot, (bot) => bot.subscriptions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "botId", referencedColumnName: "id" }])
  bot: Bot;
}
