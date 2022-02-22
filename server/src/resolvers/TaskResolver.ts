import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Task, TaskInput, TaskUpdateInput } from "../models/Task";
import { getRepository } from "typeorm";
import { Project } from "../models/Project";
import { User } from "../models/User";

@Resolver()
export class TaskResolver {
  private taskRepository = getRepository(Task);
  private projectRepository = getRepository(Project);
  private userRepository = getRepository(User);

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
  async createTask(
    @Arg("task") newTaskData: TaskInput,
    @Arg("projectID") projectID: number
  ): Promise<Task> {
    const project = await this.projectRepository.findOne(projectID);
    let finalTask = { ...newTaskData, project: project };

    const task = this.taskRepository.create(finalTask);
    task.categories = [];
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

  // assign person to task
  @Mutation(() => Task!) async assignTaskToUser(
    @Arg("taskID") taskID: number,
    @Arg("userID") userID: number
  ): Promise<Task | null> {
    let user = await this.userRepository.findOne(userID);
    let task = await this.taskRepository.findOne(taskID);

    if (task) {
      task.assigned_to = user;
      return await task.save();
    }
    return null;
  }

  // unassign memeber from project
  @Mutation(() => Task!) async unassignUserFromTask(
    @Arg("taskID") taskID: number,
    @Arg("userID") userID: number
  ): Promise<Task | null> {
    let task = await this.taskRepository.findOne(taskID);
    if (task.assigned_to) {
      task.assigned_to = null;
      return await task.save();
    }
    return null;
  }
}
