import "dotenv/config"
import { createTransport } from "nodemailer"

import { makeEmailTemplate } from "./makeEmailTemplate"
import { handleMailTransportError } from "./handleMailTransportError"

export function mailPasswordResetToken({
	email,
	token,
	username,
}: {
	token: string
	email: string
	username: string
}) {
	const transporter = createTransport({
		host: process.env.MAIL_HOST,
		port: Number(process.env.MAIL_PORT) || 0,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS,
		},
	})

	const message = {
		from: process.env.MAIL_USER,
		to: email,
		subject: "🔏 Password Reset",
		html: makeEmailTemplate(token, email, username),
	}

	transporter.sendMail(message, handleMailTransportError)
}
