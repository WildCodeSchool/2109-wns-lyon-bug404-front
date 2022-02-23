import { Field, ID, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { UserRole } from "../enums/UserRole";
import { Project } from "./Project";
import { Task } from "./Task";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column()
  password!: string;

  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  familyName!: string;

  @Field(() => [Project], { nullable: true })
  @OneToMany(() => Project, (project) => project.created_by)
  projects?: Project[];

  @Field(() => [Project], { nullable: true })
  @ManyToMany(() => Project, (project) => project.assigned_users)
  @JoinTable()
  assigned_projects?: Project[];

  @Field(() => [Task], { nullable: true })
  @OneToMany(() => Task, (task) => task.assigned_to)
  assigned_tasks?: Task[];

  @Field()
  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;
}

@InputType()
export class UserInput {
  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  familyName!: string;
}

@InputType()
export class UserUpdateInput {
  @Field({ nullable: true })
  email?: string;
}

@InputType()
export class ResetPasswordInput extends BaseEntity {
  @Field({ nullable: true })
  @Column()
  password!: string;
}
