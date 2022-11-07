import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity("post")
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  photo: string;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: "CASCADE" })
  user: User;
}
