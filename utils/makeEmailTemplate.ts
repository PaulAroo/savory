import "dotenv/config"

export function makeEmailTemplate(
	token: string,
	email: string,
	username: string
) {
	const resetLink = `
		${process.env.FRONTEND_URL}/password-reset?email=${email}&token=${token}
	`
	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Password Reset</title>
		<style>
			body {
				font-family: system-ui, -apple-system, sans-serif;
				margin: 0;
				padding: 0;
			}
			.container {
				max-width: 37.5rem;
				padding: 1.25rem;
			}
			.into {
				text-transform: capitalize;
			}
			.button {
				display: grid;
				place-items: center;
			}
			.button a {
				display: inline-block;
				padding: 10px 20px;
				background-color: #303030;
				color: #ffffff;
				text-decoration: none;
				border-radius: 4px;
			}
			.footer {
				margin-top: 20px;
				text-align: center;
				color: #999999;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<h1>Password Reset</h1>
			<p class="inro">Hello ${username} 👋🏻,</p>
			<p>You recently requested to reset your password. Click the button below to reset your password:</p>
			<p class="button"><a href=${resetLink}>Reset Password</a></p>
			<p>This token expires in 10 minutes, if you didn't request this change, you can safely ignore this email.</p>
			<div class="footer">
				<p>This email was sent by ember-oak.</p>
			</div>
		</div>
	</body>
	</html>
	
	`
}
