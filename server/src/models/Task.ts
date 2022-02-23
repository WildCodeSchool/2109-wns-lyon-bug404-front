import { Field, ID, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Project } from "./Project";
import { Status } from "./Status";
import { User } from "./User";
import { Category } from "./Category";

@ObjectType()
@Entity()
export class Task extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column({
    type: "datetime",
  })
  due_date!: Date;

  @Field()
  @Column({
    type: "datetime",
    default: () => "NOW()",
  })
  created_at!: Date;

  // @Field()
  // @Column()
  // spent_time!: string;

  @Field()
  @ManyToOne(() => Status, (status) => status.tasks)
  status?: Status;

  @Field(() => [Category], { nullable: true })
  @ManyToMany(() => Category, (category) => category.tasks)
  categories?: Category[];

  @Field()
  @ManyToOne(() => Project, (project) => project.tasks, { lazy: true })
  project: Project;

  @Field({ nullable: true })
  @ManyToOne(() => User, (user) => user.id, { lazy: true })
  assigned_to?: User;
}

@InputType()
export class TaskInput extends BaseEntity {
  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field()
  due_date!: Date;

  // @Field()
  // spent_time!: string;
}

@InputType()
export class TaskUpdateInput extends BaseEntity {
  @Field({ nullable: true })
  title!: string;

  @Field({ nullable: true })
  description!: string;

  @Field({ nullable: true })
  due_date!: Date;

  // @Field({ nullable: true })
  // spent_time!: string;
}
