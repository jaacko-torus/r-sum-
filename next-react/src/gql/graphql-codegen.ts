import type {CodegenConfig} from "@graphql-codegen/cli";
import {execSync} from "child_process";
import replace from "replace-in-file"

const HIDDEN_VALUE = "••••••••"

const graphQLSchemaCommand = (uri: string, token: string) =>
	`yarn gq ${uri} -H "X-Hasura-Admin-Secret: ${token}" --introspect > src/gql/schema.graphql`

execSync(graphQLSchemaCommand(process.env["HASURA_URI"]!, process.env["HASURA_AUTH_TOKEN"]!))

replace.sync({
	files: "src/gql/schema.graphql",
	from: /\$.+/,
	to: `# ${graphQLSchemaCommand(HIDDEN_VALUE, HIDDEN_VALUE)}\n`
})

const config: CodegenConfig = {
	overwrite: true,
	schema: "src/gql/schema.graphql",
	documents: ["src/**/*.ts", "src/**/*.tsx"],
	generates: {
		"src/gql/graphql.tsx": {
			// preset: "client",
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-react-apollo",
			],
			config: {
				// skipTypename: false,
				// withHOC: false,
				// withHooks: true,

				skipTypename: false,
				withHooks: true,
				withHOC: false,
				withComponent: false,
			}
		},
		"src/gql/graphql.schema.json": {
			plugins: ["introspection"]
		}
	}
};

// module.exports = {
// 	schema: [
// 			{
// 					[process.env["HASURA_URI"]]: {
// 							headers: {
// 									"Content-Type": "application/json",
// 									"X-Hasura-Admin-Secret": process.env["HASURA_AUTH_TOKEN"],
// 							},
// 					},
// 			},
// 	],
// 	documents: ["./src/**/*.tsx", "./src/**/*.ts"],
// 	overwrite: true,
// 	generates: {
// 			"./src/generated/graphql.tsx": {
// 					plugins: [
// 							"typescript",
// 							"typescript-operations",
// 							"typescript-react-apollo",
// 					],
// 					config: {
// 							skipTypename: false,
// 							withHooks: true,
// 							withHOC: false,
// 							withComponent: false,
// 					},
// 			},
// 			"./graphql.schema.json": {
// 					plugins: ["introspection"],
// 			},
// 	},
// };

export default config;
