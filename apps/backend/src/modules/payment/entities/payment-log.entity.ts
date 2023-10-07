import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment_log", { schema: "automatesl" })
export class PaymentLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "user_uuid", length: 255 })
  userUuid: string;

  @Column("int", { name: "amount", nullable: true })
  amount: number | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;
}
