import { Resolver, Query, Mutation, Arg, ID } from 'type-graphql';
import { Project, ProjectInput, ProjectUpdateInput } from '../models/Project';
import { getRepository, Repository } from 'typeorm';
import { User } from '../models/User';
import { ProjectStates } from '../enums/ProjectStates';
import { Status, StatusInput } from '../models/Status';
import { defaultStatus } from '../utils/defaultStatus';

@Resolver()
export class ProjectResolver {
  private projectRepository = getRepository(Project);
  private userRepository = getRepository(User);
  private statusRepository = getRepository(Status);

  // get all projects
  @Query(() => [Project])
  async getProjects(): Promise<Project[]> {
    return await this.projectRepository.find({
      relations: ['assigned_users', 'created_by']
    });
  }

  //  Find one product
  @Query(() => Project!, { nullable: true })
  async getProject(
    @Arg('projectID') projectID: number
  ): Promise<Project | undefined | null> {
    return await this.projectRepository.findOne(projectID, {
      relations: ['assigned_users', 'created_by']
    });
  }

  // add one project
  @Mutation(() => Project!)
  async createProject(
    @Arg('userID', () => ID) id: number,
    @Arg('project', () => ProjectInput) newProjectData: ProjectInput
  ): Promise<Project> {
    const project = this.projectRepository.create(newProjectData);
    const user = await this.userRepository.findOne(id);

    project.assigned_users = [];
    project.taskStatus = [];
    project.created_by = user;

    return await project.save();
  }

  //  delete a project
  @Mutation(() => Project!, { nullable: true })
  async deleteProject(
    @Arg('projectID') projectID: string
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
    @Arg('project', () => ProjectUpdateInput) newProjectData: Project,
    @Arg('projectID') projectID: number
  ): Promise<Project | null> {
    let project = await Project.findOne(projectID);
    if (project) {
      await this.projectRepository.update(projectID, newProjectData);
      await project.reload();
      return project;
    }
    return null;
  }

  // assign member to project
  @Mutation(() => Project!) async assignProjectToUser(
    @Arg('projectID') projectID: number,
    @Arg('userID') userID: number
  ): Promise<Project | null> {
    let user = await this.userRepository.findOne(userID);
    let project = await this.projectRepository.findOne(projectID, {
      relations: ['assigned_users']
    });

    project.assigned_users.push(user);

    if (project) {
      await project.save();
      return project;
    }
    return null;
  }

  // unassign member from project
  @Mutation(() => Project!) async unassignUserFromProject(
    @Arg('projectID') projectID: number,
    @Arg('userID') userID: number
  ): Promise<Project | null> {
    let project = await this.projectRepository.findOne(projectID, {
      relations: ['assigned_users']
    });

    if (project) {
      project.assigned_users = project.assigned_users.filter(
        (user) => user.id !== userID
      );
      await project.save();
      return project;
    }
    return null;
  }

  // update project status
  @Mutation(() => Project)
  async changeProjectStates(
    @Arg('projectID') id: number,
    @Arg('state') state: ProjectStates
  ): Promise<Project | Error> {
    const project = await this.projectRepository.findOne(id);
    if (ProjectStates[state]) {
      project.state = ProjectStates[state];
      await project.save();
      return project;
    }
    return new Error("Status doesn't exist");
  }

  // initiate status to a new project
  @Mutation(() => Project!) async initiateProjectStatus(
    @Arg('projectID') projectID: number
  ): Promise<Project | null> {
    const project = await this.projectRepository.findOne(projectID, {
      relations: ['taskStatus']
    });

    for (const item of defaultStatus) {
      const status = this.statusRepository.create(item);
      status.project = project;
      project.taskStatus.push(status);
      await status.save();
    }

    if (project) {
      await project.save();
      return project;
    }
    return null;
  }
}
