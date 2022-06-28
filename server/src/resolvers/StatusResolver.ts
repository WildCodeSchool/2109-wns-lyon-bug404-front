import { Resolver, Query, Mutation, Arg, ID } from 'type-graphql';
import { getRepository } from 'typeorm';
import { Status, StatusInput } from '../models/Status';

@Resolver()
export class StatusResolver {
  private statusRepository = getRepository(Status);
  // add status
  @Mutation(() => Status!)
  async createStatus(
    @Arg('status', () => StatusInput) newStatusData: StatusInput
  ): Promise<Status> {
    const status = this.statusRepository.create(newStatusData);
    return await status.save();
  }

  //   get all status
  @Query(() => [Status])
  async getAllStatus(): Promise<Status[]> {
    return await this.statusRepository.find();
  }

  //   delete status
  @Mutation(() => Status!, { nullable: true })
  async deleteStatus(
    @Arg('statusID') statusID: string
  ): Promise<Status | undefined | null> {
    const allStatus = this.statusRepository;
    const status = await allStatus.findOne(statusID);
    if (status) {
      await allStatus.delete(statusID);
      return status;
    }
    return null;
  }

  //   update status
  @Mutation(() => Status!) async updateTaskStatus(
    @Arg('status', () => StatusInput) newStatusData: Status,
    @Arg('statusID') statusID: number
  ): Promise<Status | null> {
    const status = await Status.findOne(statusID);
    if (status) {
      await this.statusRepository.update(statusID, newStatusData);
      await status.reload();
      return status;
    }
    return null;
  }

  // get status byt project ID
  @Query(() => [Status])
  async getStatusByProjectID(
    @Arg('projectID') projectID: number
  ): Promise<Status[]> {
    return await this.statusRepository.find({
      where: {
        project: projectID
      },
      relations: ['project', 'tasks']
    });
  }
}
