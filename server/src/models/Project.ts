import { Field, ID, InputType, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	PrimaryGeneratedColumn,
	OneToMany,
} from "typeorm";
import { Task } from "./Task";

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
	@Column()
	start_date!: string;

	@Field()
	@Column()
	end_date!: string;

	@Field()
	@Column({ default: false })
	status!: boolean;

	// @Field()
	// @OneToMany(() => Task, (task) => task)
	// tasks: Task[];
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
	start_date!: string;

	@Field()
	end_date!: string;

	@Field()
	status: boolean;

	// @Field()
	// tasks: Task[];
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
	start_date!: string;

	@Field({ nullable: true })
	end_date!: string;

	@Field({ nullable: true })
	status: boolean;

	// @Field()
	// tasks: Task[];
}
