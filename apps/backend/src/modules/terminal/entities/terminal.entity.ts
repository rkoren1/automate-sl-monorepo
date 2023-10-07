import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("terminal", { schema: "automatesl" })
export class Terminal {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "apiKey", length: 255 })
  apiKey: string;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;
}
