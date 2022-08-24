import 'reflect-metadata';
import express from 'express';
import { graphqlUploadExpress } from 'graphql-upload';
import path from 'path';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { config } from './config/config';
import { TaskResolver } from './resolvers/TaskResolver';
import { ProjectResolver } from './resolvers/ProjectResolver';
import { UsersResolver } from './resolvers/UserResolver';
import { customAuthChecker } from './auth/auth';
import { CategoryResolver } from './resolvers/CategoryResolver';
import { StatusResolver } from './resolvers/StatusResolver';
import { ProfileFileResolver } from './resolvers/UploadFileResolver';

export async function bootstrap() {
  console.log(
    `${config.server}://${config.db_uname}:${config.db_password}@${config.host}/${config.db}`
  );
  await createConnection({
    type: config.server as 'mysql',
    url: `${config.server}://${config.db_uname}:${config.db_password}@${config.host}/${config.db}`,
    entities: [path.resolve(__dirname, './models/*.{ts,js}')],
    synchronize: true
  });

  const schema = await buildSchema({
    resolvers: [
      TaskResolver,
      ProjectResolver,
      UsersResolver,
      CategoryResolver,
      StatusResolver,
      ProfileFileResolver
    ],
    authChecker: customAuthChecker
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => {
      const authorization = req.headers['authorization'];
      let token = null;
      if (authorization && authorization?.startsWith('Bearer ')) {
        token = authorization.replace('Bearer ', '');
      } else {
        token = authorization;
      }

      return {
        token,
        user: null,
        res
      };
    }
  });
  await server.start();
  const app = express();
  app.use(cors());
  app.use(graphqlUploadExpress());
  server['applyMiddleware']({ app });
  app.use('/files', express.static(path.join(__dirname, 'files')));

  await app.listen(config.port);

  console.log(`Server is running, GraphQL Playund available at ${config.port}`);
}

bootstrap();
