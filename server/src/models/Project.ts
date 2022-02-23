import { Field, ID, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { ProjectStates } from "../enums/ProjectStates";
import { Task } from "./Task";
import { User } from "./User";
import { Status } from "./Status";

@ObjectType()
@Entity()
export class Project extends BaseEntity {
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
  @Column()
  image_url!: string;

  @Field()
  @Column({
    type: "datetime",
  })
  start_date!: Date;

  @Field()
  @Column({
    type: "datetime",
  })
  end_date?: Date;

  @Field()
  @Column({
    type: "enum",
    enum: ProjectStates,
    default: ProjectStates.ON_TRACK,
  })
  state!: ProjectStates;

  @Field()
  @ManyToOne(() => User, (user) => user.id)
  created_by: User;

  @Field(() => [User], { nullable: true })
  @ManyToMany(() => User, (user) => user.assigned_projects)
  assigned_users?: User[];

  @Field(() => [Task], { nullable: true })
  @OneToMany(() => Task, (task) => task.project, { lazy: true })
  tasks?: Task[];

  @Field(() => [Status])
  @OneToMany(() => Status, (status) => status.project)
  taskStatus!: Status[];
}

@InputType()
export class ProjectInput extends BaseEntity {
  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field()
  image_url!: string;

  @Field()
  start_date!: Date;
}

@InputType()
export class ProjectUpdateInput extends BaseEntity {
  @Field({ nullable: true })
  title!: string;

  @Field({ nullable: true })
  description!: string;

  @Field({ nullable: true })
  image_url!: string;

  @Field({ nullable: true })
  end_date!: string;

  @Field({ nullable: true })
  start_date!: Date;
}
