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

export async function bootstrap() {
  await createConnection({
    type: config.server as "mysql",
    url: `${config.server}://${config.db_uname}:${config.db_password}@${config.host}/${config.db}`,
    // url: "postgres://ogsvcsekjzjcnd:d46a14d3797737d18fa6fe067666c523e134b91f3ed003cc0fdbd24a6dd3fee9@ec2-34-253-29-48.eu-west-1.compute.amazonaws.com:5432/dar498qkdfi05s",
    entities: [path.resolve(__dirname, "./models/*.{ts,js}")],
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },
    // logging: ["query", "error"],
  });

  const schema = await buildSchema({
    resolvers: [TaskResolver, ProjectResolver, UsersResolver],
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
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
