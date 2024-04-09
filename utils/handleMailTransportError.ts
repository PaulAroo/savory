import { getTestMessageUrl } from "nodemailer"
import type SMTPTransport from "nodemailer/lib/smtp-transport"

export function handleMailTransportError(
	err: Error | null,
	info: SMTPTransport.SentMessageInfo
) {
	if (err) {
		console.log(err)
	}

	if (process.env.MAIL_USER?.includes("ethereal.email")) {
		console.log(`📧 Message sent! Preview at ${getTestMessageUrl(info)}`)
	}
}
