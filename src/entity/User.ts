import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from './Post';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ type: 'numeric', nullable: true })
  age: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
  
  @OneToMany(() => Post, post => post.user )
  posts: Post[]
}
