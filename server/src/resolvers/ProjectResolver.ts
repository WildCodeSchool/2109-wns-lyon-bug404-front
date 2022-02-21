import { Resolver, Query, Mutation, Arg, ID } from "type-graphql";
import { Project, ProjectInput, ProjectUpdateInput } from "../models/Project";
import { getRepository } from "typeorm";
import { User } from "../models/User";

@Resolver()
export class ProjectResolver {
  private projectRepository = getRepository(Project);
  private userRepository = getRepository(User);

  // get all projects
  @Query(() => [Project])
  async getProjects(): Promise<Project[]> {
    const projects = await this.projectRepository.find();
    console.log(projects);
    return projects;
  }

  //  Find one product
  @Query(() => Project!, { nullable: true })
  async getProject(
    @Arg("projectID") projectID: string
  ): Promise<Project | undefined | null> {
    return await this.projectRepository.findOne(projectID);
  }

  // add one project
  @Mutation(() => Project!)
  async createProject(
    @Arg("userID", () => ID) id: number,
    @Arg("project", () => ProjectInput) newProjectData: ProjectInput
  ): Promise<Project> {
    const project = this.projectRepository.create(newProjectData);
    const user = await this.userRepository.findOne(id);
    project.assigned_users = [];
    project.created_by = user;
    return await project.save();
  }

  //  delete a project
  @Mutation(() => Project!, { nullable: true })
  async deleteProject(
    @Arg("projectID") projectID: string
  ): Promise<Project | undefined | null> {
    const allProjects = await this.projectRepository;
    const project = await allProjects.findOne(projectID);
    if (project) {
      await allProjects.delete(projectID);
      return project;
    }
    return null;
  }

  // Update a project
  @Mutation(() => Project!) async updateProject(
    @Arg("project", () => ProjectUpdateInput) newProjectData: Project,
    @Arg("projectID") projectID: number
  ): Promise<Project | null> {
    let project = await Project.findOne(projectID);
    if (project) {
      console.log(newProjectData);
      await this.projectRepository.update(projectID, newProjectData);
      await project.reload();
      return project;
    }
    return null;
  }

  // assign memeber to project
  @Mutation(() => Project!) async assignProjectToUser(
    @Arg("projectID") projectID: number,
    @Arg("userID") userID: number
  ): Promise<Project | null> {
    let user = await this.userRepository.findOne(userID);
    let project = await this.projectRepository.findOne(projectID, {
      relations: ["assigned_users"],
    });

    project.assigned_users.push(user);

    if (project) {
      await project.save();
      return project;
    }
    return null;
  }
}
