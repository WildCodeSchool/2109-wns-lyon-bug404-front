import { Resolver, Mutation, Arg, ID } from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';
import { createReadStream, createWriteStream } from 'fs';

import { Upload } from '../types/Upload';
import { Project } from '../models/Project';
import { MediaFile, MediaFileInput } from '../models/MediaFile';
import { getRepository } from 'typeorm';

@Resolver()
export class ProfileFileResolver {
  private mediaRepository = getRepository(MediaFile);
  @Mutation(() => MediaFile)
  async addProjectFile(
    @Arg('projectID') projectID: number,
    @Arg('data', () => MediaFileInput) data: MediaFileInput
  ): Promise<boolean> {
    const file = await data.file;
    let project = await Project.findOne(projectID);
    if (project) {
      const mediaFile = this.mediaRepository.create({
        filename: file.filename,
        publicUrl: `http://localhost:4001/files/${file.filename}`,
        project: project
      });

      return new Promise(async (resolve, reject) =>
        file
          .createReadStream()
          .pipe(createWriteStream(__dirname + `/../files/${file.filename}`))
          .on('finish', async () => {
            return await mediaFile.save();
          })
          .on('error', () => reject(false))
      );
    } else {
      console.log(3);
      return null;
    }
  }
}
