import "reflect-metadata";
import path from "path";
import { ApolloServer } from "apollo-server";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { config } from "./config/config";
import { TaskResolver } from "./resolvers/TaskResolver";
import { ProjectResolver } from "./resolvers/ProjectResolver";
import { UsersResolver } from "./resolvers/UserResolver";
import { customAuthChecker } from "./auth/auth";
import { CategoryResolver } from "./resolvers/CategoryResolver";
import { StatusResolver } from "./resolvers/StatusResolver";

export async function bootstrap() {
  await createConnection({
    type: config.server as "mysql",
    url: `${config.server}://${config.db_uname}:${config.db_password}@${config.host}/${config.db}`,
    entities: [path.resolve(__dirname, "./models/*.{ts,js}")],
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },
    // logging: ["query", "error"],
  });

  const schema = await buildSchema({
    resolvers: [
      TaskResolver,
      ProjectResolver,
      UsersResolver,
      CategoryResolver,
      StatusResolver,
    ],
    authChecker: customAuthChecker,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      return {
        token: req.headers.authorization,
        user: null,
      };
    },
  });
  
  const { url } = await server.listen(config.port);
  console.log(`Server is running, GraphQL Playund available at ${url}`);
}

bootstrap();
