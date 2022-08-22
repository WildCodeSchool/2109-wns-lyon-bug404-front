import { graphql } from 'graphql';
import { buildSchema } from 'type-graphql';
import { customAuthChecker } from '../../src/auth/auth';
import { TaskResolver } from '../../src/resolvers/TaskResolver';
import { ProjectResolver } from '../../src/resolvers/ProjectResolver';
import { UsersResolver } from '../../src/resolvers/UserResolver';
import { CategoryResolver } from '../../src/resolvers/CategoryResolver';
import { StatusResolver } from '../../src/resolvers/StatusResolver';
import { ProfileFileResolver } from '../../src/resolvers/UploadFileResolver';

interface Options {
  source: string;
  variableValues?: any;
}

export const gCall = async ({ source, variableValues }: Options) => {
  return graphql({
    schema: await buildSchema({
      resolvers: [
        TaskResolver,
        ProjectResolver,
        UsersResolver,
        CategoryResolver,
        StatusResolver,
        ProfileFileResolver
      ],
      authChecker: customAuthChecker
    }),

    source,
    variableValues
  });
};
