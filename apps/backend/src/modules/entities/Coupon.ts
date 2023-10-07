import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Package } from "./Package";

@Entity("coupon", { schema: "automatesl" })
export class Coupon {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "type", length: 255 })
  type: string;

  @Column("int", { name: "duration" })
  duration: number;

  @Column("int", { name: "uses" })
  uses: number;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Package, (package) => package.coupon)
  packages: Package[];
}
