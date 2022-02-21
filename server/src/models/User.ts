import { Field, ID, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Project } from "./Project";

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

  @Field(() => [Project], { nullable: true })
  @OneToMany(() => Project, (project) => project.created_by)
  projects?: Project[];
}

@InputType()
export class UserInput {
  @Field()
  email!: string;

  @Field()
  password!: string;
}
