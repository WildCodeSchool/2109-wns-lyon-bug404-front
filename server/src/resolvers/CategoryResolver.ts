import { Resolver, Query, Mutation, Arg, ID } from "type-graphql";
import { getRepository } from "typeorm";
import { Category, CategoryInput } from "../models/Category";
import { Status } from "../models/Status";
import { Task } from "../models/Task";

@Resolver()
export class CategoryResolver {
  private categoryRepository = getRepository(Category);
  private taskRepository = getRepository(Task);

  // add category
  @Mutation(() => Category!)
  async createCategory(
    @Arg("category", () => CategoryInput) newCategoryData: CategoryInput
  ): Promise<Category> {
    const category = this.categoryRepository.create(newCategoryData);
    category.tasks = [];
    return await category.save();
  }

  //   get all category
  @Query(() => [Category])
  async getAllCategories(): Promise<Category[]> {
    return await this.categoryRepository.find({
      relations: ["tasks"],
    });
  }

  //   delete category
  @Mutation(() => Category!, { nullable: true })
  async deleteCategory(
    @Arg("categoryID") categoryID: string
  ): Promise<Category | undefined | null> {
    const allCategory = this.categoryRepository;
    const category = await allCategory.findOne(categoryID, {
      relations: ["tasks"],
    });
    if (category) {
      await allCategory.delete(categoryID);
      return category;
    }
    return null;
  }

  //   update category
  @Mutation(() => Category!) async updateCategory(
    @Arg("category", () => CategoryInput) newCategoryData: Category,
    @Arg("categoryID") categoryID: number
  ): Promise<Category | null> {
    let category = await Category.findOne(categoryID, {
      relations: ["tasks"],
    });
    if (category) {
      await this.categoryRepository.update(categoryID, newCategoryData);
      await category.reload();
      return category;
    }
    return null;
  }

  // assign category to task
  @Mutation(() => Category!) async assignCategoryToTask(
    @Arg("taskID") taskID: number,
    @Arg("categoryID") categoryID: number
  ): Promise<Category | null> {
    let task = await this.taskRepository.findOne(taskID, {
      relations: ["categories"],
    });
    let category = await this.categoryRepository.findOne(categoryID, {
      relations: ["tasks"],
    });
    if (category && task) {
      task.categories.push(category);
      await task.save();
      return category;
    }
    return null;
  }

  // unassign memeber from category
  @Mutation(() => Category!) async unassignCategoryFromTask(
    @Arg("categoryID") categoryID: number,
    @Arg("taskID") taskID: number
  ): Promise<Category | null> {
    let category = await this.categoryRepository.findOne(categoryID, {
      relations: ["tasks"],
    });

    if (category) {
      category.tasks = category.tasks.filter((task) => task.id !== taskID);
      await category.save();
      return category;
    }
    return null;
  }
}
