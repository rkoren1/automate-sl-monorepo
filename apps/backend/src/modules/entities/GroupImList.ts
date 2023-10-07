import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GroupImAvatar } from "./GroupImAvatar";
import { User } from "./User";

@Index("userId", ["userId"], {})
@Entity("groupImList", { schema: "automatesl" })
export class GroupImList {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "listName", length: 255 })
  listName: string;

  @Column("int", { name: "userId" })
  userId: number;

  @Column("datetime", { name: "createdAt", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => GroupImAvatar, (groupImAvatar) => groupImAvatar.groupImList)
  groupImAvatars: GroupImAvatar[];

  @ManyToOne(() => User, (user) => user.groupImLists, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: User;
}
