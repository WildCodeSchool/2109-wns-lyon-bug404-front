import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Task, TaskInput, TaskUpdateInput } from "../models/Task";
import { getRepository } from "typeorm";

@Resolver()
export class TaskResolver {
	private taskRepository = getRepository(Task);

	//Get all tasks
	@Query(() => [Task])
	async getTasks(): Promise<Task[]> {
		return await this.taskRepository.find();
	}

	// Get one task
	@Query(() => Task!, { nullable: true })
	async getTask(@Arg("taskID") id: number): Promise<Task> {
		return await this.taskRepository.findOne(id);
	}

	//Create a task
	@Mutation(() => Task)
	async createTask(@Arg("task") newTaskData: TaskInput): Promise<Task> {
		const task = this.taskRepository.create(newTaskData);
		return await task.save();
	}

	//delete a task
	@Mutation(() => Task!, { nullable: true })
	async deleteTask(
		@Arg("taskID") id: string
	): Promise<Task | undefined | null> {
		const allTasks = await this.taskRepository;
		const task = await allTasks.findOne(id);
		if (task) {
			await allTasks.delete(id);
			return task;
		}
		return null;
	}

	// Update a task
	@Mutation(() => Task!) async updateTask(
		@Arg("task", () => TaskUpdateInput) newTaskData: Task,
		@Arg("taskID") id: number
	): Promise<Task | null> {
		let task = await Task.findOne(id);
		if (task) {
			await this.taskRepository.update(id, newTaskData);
			await task.reload();
			return task;
		}
		return null;
	}
}
