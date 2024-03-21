import { randomBytes } from "crypto"
import { createAuth } from "@keystone-6/auth"
import { statelessSessions } from "@keystone-6/core/session"

let sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret && process.env.NODE_ENV !== "production") {
	sessionSecret = randomBytes(32).toString("hex")
}

const { withAuth } = createAuth({
	listKey: "User",
	identityField: "email",
	sessionData: "id name email createdAt",
	secretField: "password",

	initFirstItem: {
		fields: ["name", "email", "password"],
	},
})

const sessionMaxAge = 60 * 60 * 24 * 7

const session = statelessSessions({
	maxAge: sessionMaxAge,
	secret: sessionSecret!,
	secure: true,
	sameSite: "none",
})

export { withAuth, session }
