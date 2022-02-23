import { Field, ID, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Project } from "./Project";
import { Task } from "./Task";

@ObjectType()
@Entity()
export class Status extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field(() => [Task], { nullable: true })
  @OneToMany(() => Task, (task) => task.status)
  tasks?: Task[];

  @Field(() => Project)
  @ManyToOne(() => Project, (project) => project.taskStatus)
  project?: Project;
}

@InputType()
export class StatusInput extends BaseEntity {
  @Field()
  @Column()
  name!: string;
}
