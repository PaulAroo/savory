import "dotenv/config"
import { config } from "@keystone-6/core"

import { lists } from "./schema"
import { withAuth, session } from "./auth"
import { insertSeedData } from "./seed-data"
import { TypeInfo } from "./.keystone/types"

export default withAuth(
	config<TypeInfo>({
		server: {
			cors: {
				origin: [process.env.FRONTEND_URL],
				credentials: true,
			},
		},
		db: {
			provider: "postgresql",
			url: process.env.DATABASE_URL || "",
			async onConnect(keystoneContext) {
				if (process.argv.includes("--seed-data")) {
					await insertSeedData(keystoneContext)
				}
			},
		},
		lists,
		session,
		ui: {
			isAccessAllowed: ({ session }) => {
				return !!session?.data
			},
		},
		types: {
			path: ".keystone/types.ts",
		},
	})
)
