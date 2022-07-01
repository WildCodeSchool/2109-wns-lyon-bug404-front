/** entities/Message.ts */
import { GraphQLUpload } from 'graphql-upload';
import { Field, ID, InputType, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Project } from './Project';

@ObjectType()
@Entity()
export class MediaFile extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  filename: string;

  @Field()
  @Column()
  publicUrl: string;

  @Field(() => [Project], { nullable: true })
  @ManyToOne(() => Project, (project) => project.id)
  project: Project;
}

@InputType()
export class MediaFileInput extends BaseEntity {
  @Field(() => GraphQLUpload, { nullable: true })
  file;
}
