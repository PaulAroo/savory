import { randomBytes } from "crypto"
import { createAuth } from "@keystone-6/auth"
import { KeystoneContext } from "@keystone-6/core/types"
import { statelessSessions } from "@keystone-6/core/session"

import { TypeInfo } from "./.keystone/types"
import { mailPasswordResetToken } from "./utils/mailPasswordResetToken"

let sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret && process.env.NODE_ENV !== "production") {
	sessionSecret = randomBytes(32).toString("hex")
}

const { withAuth } = createAuth({
	listKey: "User",
	identityField: "email",
	sessionData: "id name email",
	secretField: "password",
	initFirstItem: {
		fields: ["name", "email", "password"],
	},
	passwordResetLink: {
		async sendToken({ token, identity, itemId, context }) {
			const user = await (
				context as any as KeystoneContext<TypeInfo>
			).db.User.findOne({ where: { id: itemId as string } })

			mailPasswordResetToken({
				token,
				email: identity,
				username: user?.name || "",
			})
		},
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
