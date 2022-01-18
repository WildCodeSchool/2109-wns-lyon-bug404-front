import "reflect-metadata";
import path from "path";
import { ApolloServer } from "apollo-server";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { config } from "./config/config";
import { TaskResolver } from "./resolvers/TaskResolver";
import { ProjectResolver } from "./resolvers/ProjectResolver";

export async function bootstrap() {
	console.log(config);
	await createConnection({
		type: config.server as "mariadb",
		url: `${config.server}://${config.db_uname}:${config.db_password}@${config.host}/${config.db}`,
		entities: [path.resolve(__dirname, "./models/*.{ts,js}")],
		synchronize: true,
	});

	const schema = await buildSchema({
		resolvers: [TaskResolver, ProjectResolver],
	});

	const server = new ApolloServer({
		schema,
	});

	const { url } = await server.listen(config.port);
	console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
