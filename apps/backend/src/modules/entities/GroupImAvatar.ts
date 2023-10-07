import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GroupImList } from "./GroupImList";

@Index("groupImListId", ["groupImListId"], {})
@Entity("groupImAvatar", { schema: "automatesl" })
export class GroupImAvatar {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "uuid", length: 255 })
  uuid: string;

  @Column("int", { name: "groupImListId" })
  groupImListId: number;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => GroupImList, (groupImList) => groupImList.groupImAvatars, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "groupImListId", referencedColumnName: "id" }])
  groupImList: GroupImList;
}
