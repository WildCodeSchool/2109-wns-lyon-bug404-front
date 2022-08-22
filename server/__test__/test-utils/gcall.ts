import { graphql } from 'graphql';
import { buildSchema } from 'type-graphql';
import { customAuthChecker } from '../../src/auth/auth';
import { CategoryResolver } from '../../src/resolvers/CategoryResolver';
import { ProjectResolver } from '../../src/resolvers/ProjectResolver';
import { StatusResolver } from '../../src/resolvers/StatusResolver';
import { TaskResolver } from '../../src/resolvers/TaskResolver';
import { ProfileFileResolver } from '../../src/resolvers/UploadFileResolver';
import { UsersResolver } from '../../src/resolvers/UserResolver';

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
