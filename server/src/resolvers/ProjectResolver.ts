import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Project, ProjectInput, ProjectUpdateInput } from "../models/Project";
import { getRepository } from "typeorm";

@Resolver()
export class ProjectResolver {
	private projectRepository = getRepository(Project);

	// get all projects
	@Query(() => [Project])
	async getProjects(): Promise<Project[]> {
		return await this.projectRepository.find();
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
		@Arg("project", () => ProjectInput) newProjectData: ProjectInput
	): Promise<Project> {
		const project = this.projectRepository.create(newProjectData);
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
}
