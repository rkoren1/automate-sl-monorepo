import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Coupon } from "./Coupon";
import { SharedBotUserSubscription } from "./SharedBotUserSubscription";
import { Subscription } from "./Subscription";

@Index("couponId", ["couponId"], {})
@Entity("package", { schema: "automatesl" })
export class Package {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "discount" })
  discount: number;

  @Column("int", { name: "couponId", nullable: true })
  couponId: number | null;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("varchar", {
    name: "packageDescription",
    nullable: true,
    length: 255,
  })
  packageDescription: string | null;

  @Column("varchar", { name: "packageName", length: 255 })
  packageName: string;

  @Column("int", { name: "pricePerMonth" })
  pricePerMonth: number;

  @Column("int", { name: "pricePerWeek" })
  pricePerWeek: number;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Coupon, (coupon) => coupon.packages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "couponId", referencedColumnName: "id" }])
  coupon: Coupon;

  @OneToMany(
    () => SharedBotUserSubscription,
    (sharedBotUserSubscription) => sharedBotUserSubscription.package
  )
  sharedBotUserSubscriptions: SharedBotUserSubscription[];

  @OneToMany(() => Subscription, (subscription) => subscription.package)
  subscriptions: Subscription[];
}
