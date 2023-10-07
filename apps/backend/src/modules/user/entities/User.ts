import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bot } from "./Bot";
import { GroupImList } from "./GroupImList";
import { PaymentLog } from "./PaymentLog";
import { SharedBotUserSubscription } from "./SharedBotUserSubscription";

@Index("email", ["email"], { unique: true })
@Index("uuid", ["uuid"], { unique: true })
@Entity("user", { schema: "automatesl" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", unique: true, length: 255 })
  email: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "uuid", nullable: true, unique: true, length: 36 })
  uuid: string | null;

  @Column("varchar", { name: "avatarName", nullable: true, length: 255 })
  avatarName: string | null;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("int", { name: "ldollarBalance", nullable: true })
  ldollarBalance: number | null;

  @Column("varchar", { name: "refreshToken", nullable: true, length: 255 })
  refreshToken: string | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Bot, (bot) => bot.user)
  bots: Bot[];

  @OneToMany(() => GroupImList, (groupImList) => groupImList.user)
  groupImLists: GroupImList[];

  @OneToMany(() => PaymentLog, (paymentLog) => paymentLog.userUu)
  paymentLogs: PaymentLog[];

  @OneToMany(
    () => SharedBotUserSubscription,
    (sharedBotUserSubscription) => sharedBotUserSubscription.user
  )
  sharedBotUserSubscriptions: SharedBotUserSubscription[];
}
