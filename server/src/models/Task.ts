import { userInfo } from "os";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	OneToMany,
} from "typeorm";
import { Project } from "./Project";

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
	@Column()
	estimated_time!: string;

	@Field()
	@Column()
	created_at!: string;

	@Field()
	@Column()
	spent_time!: string;

	@Field()
	@Column()
	status!: string;

	@Field()
	@Column()
	category!: string;

	// @Field()
	// @ManyToOne(() => Project, (project) => project.id)
	// projectId: number;
}

@InputType()
export class TaskInput extends BaseEntity {
	@Field()
	title!: string;

	@Field()
	description!: string;

	@Field()
	estimated_time!: string;

	@Field()
	created_at!: string;

	@Field()
	spent_time!: string;

	@Field()
	status!: string;

	@Field()
	category!: string;

	// @Field()
	// @ManyToOne(() => Project, (project) => project.id)
	// projectId: number;
}

@InputType()
export class TaskUpdateInput extends BaseEntity {
	@Field({ nullable: true })
	title!: string;

	@Field({ nullable: true })
	description!: string;

	@Field({ nullable: true })
	status!: string;

	@Field({ nullable: true })
	spent_time!: string;

	// @Field({ nullable: true })
	// projectId: number;
}
