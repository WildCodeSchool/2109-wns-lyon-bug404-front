import { Field, ID, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Task } from "./Task";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field(() => [Task], { nullable: true })
  @ManyToMany(() => Task, (task) => task.categories)
  @JoinTable()
  tasks?: Task[];
}

@InputType()
export class CategoryInput extends BaseEntity {
  @Field()
  @Column()
  name!: string;
}
