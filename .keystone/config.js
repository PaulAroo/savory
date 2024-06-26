"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_config4 = require("dotenv/config");
var import_core2 = require("@keystone-6/core");

// schema.ts
var import_config = require("dotenv/config");
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_cloudinary = require("@keystone-6/cloudinary");
var import_fields = require("@keystone-6/core/fields");
var lists = {
  User: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      password: (0, import_fields.password)({ validation: { isRequired: true } }),
      createdAt: (0, import_fields.timestamp)({
        defaultValue: { kind: "now" }
      })
    }
  }),
  Product: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      description: (0, import_fields.text)({
        ui: {
          displayMode: "textarea"
        }
      }),
      photo: (0, import_fields.relationship)({
        ref: "ProductImage.product",
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] },
          inlineEdit: { fields: ["image", "altText"] }
        }
      }),
      status: (0, import_fields.select)({
        options: [
          { label: "Draft", value: "DRAFT" },
          { label: "Available", value: "AVAILABLE" },
          { label: "Unavailable", value: "UNAVAILABLE" }
        ],
        defaultValue: "DRAFT",
        ui: {
          displayMode: "segmented-control",
          createView: { fieldMode: "hidden" }
        }
      }),
      price: (0, import_fields.integer)()
    },
    ui: {
      listView: {
        initialColumns: ["name", "description", "status", "price"]
      }
    }
  }),
  ProductImage: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      image: (0, import_cloudinary.cloudinaryImage)({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
          apiKey: process.env.CLOUDINARY_API_KEY || "",
          apiSecret: process.env.CLOUDINARY_API_SECRET || "",
          folder: process.env.CLOUDINARY_API_FOLDER
        },
        label: "Source"
      }),
      altText: (0, import_fields.text)(),
      product: (0, import_fields.relationship)({ ref: "Product.photo" })
    },
    ui: {
      listView: {
        initialColumns: ["image", "altText", "product"]
      }
    }
  })
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");

// utils/mailPasswordResetToken.ts
var import_config3 = require("dotenv/config");
var import_nodemailer2 = require("nodemailer");

// utils/makeEmailTemplate.ts
var import_config2 = require("dotenv/config");
function makeEmailTemplate(token, email, username) {
  const resetLink = `
		${process.env.FRONTEND_URL}/password-reset?email=${email}&token=${token}
	`;
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
			<p class="inro">Hello ${username} \u{1F44B}\u{1F3FB},</p>
			<p>You recently requested to reset your password. Click the button below to reset your password:</p>
			<p class="button"><a href=${resetLink}>Reset Password</a></p>
			<p>This token expires in 10 minutes, if you didn't request this change, you can safely ignore this email.</p>
			<div class="footer">
				<p>This email was sent by ember-oak.</p>
			</div>
		</div>
	</body>
	</html>
	
	`;
}

// utils/handleMailTransportError.ts
var import_nodemailer = require("nodemailer");
function handleMailTransportError(err, info) {
  if (err) {
    console.log(err);
  }
  if (process.env.MAIL_USER?.includes("ethereal.email")) {
    console.log(`\u{1F4E7} Message sent! Preview at ${(0, import_nodemailer.getTestMessageUrl)(info)}`);
  }
}

// utils/mailPasswordResetToken.ts
function mailPasswordResetToken({
  email,
  token,
  username
}) {
  const transporter = (0, import_nodemailer2.createTransport)({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 0,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
  const message = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "\u{1F50F} Password Reset",
    html: makeEmailTemplate(token, email, username)
  };
  transporter.sendMail(message, handleMailTransportError);
}

// auth.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "id name email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
  },
  passwordResetLink: {
    async sendToken({ token, identity, itemId, context }) {
      const user = await context.db.User.findOne({ where: { id: itemId } });
      mailPasswordResetToken({
        token,
        email: identity,
        username: user?.name || ""
      });
    }
  }
});
var sessionMaxAge = 60 * 60 * 24 * 7;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
  secure: true,
  sameSite: "none"
});

// seed-data/data.ts
var products = [
  {
    name: "Yeti Hondo",
    description: "soo nice",
    status: "AVAILABLE",
    price: 3423
  },
  {
    name: "Airmax 270",
    description: "Great shoes!",
    status: "AVAILABLE",
    price: 5234
  },
  {
    name: "KITH Hoodie",
    description: "Love this hoodie",
    status: "AVAILABLE",
    price: 23562
  },
  {
    name: "Fanorak",
    description: "Super hip. Comes in a number of colours",
    status: "AVAILABLE",
    price: 252342
  },
  {
    name: "Nike Vapormax",
    description: "Kind of squeaky on some floors",
    status: "AVAILABLE",
    price: 83456
  },
  {
    name: "Yeti Cooler",
    description: "Who spends this much on a cooler?!",
    status: "AVAILABLE",
    price: 75654
  },
  {
    name: "Naked and Famous Denim",
    description: "Japanese Denim, made in Canada",
    status: "AVAILABLE",
    price: 10924
  },
  {
    name: "Rimowa Luggage",
    description: "S T E A L T H",
    status: "AVAILABLE",
    price: 47734
  },
  {
    name: "Black Hole ",
    description: "Outdoorsy ",
    status: "AVAILABLE",
    price: 4534
  },
  {
    name: "Nudie Belt",
    description: "Sick design",
    status: "AVAILABLE",
    price: 5234
  },
  {
    name: "Goose",
    description: "Keep warm.",
    status: "AVAILABLE",
    price: 74544
  },
  {
    name: "Ultraboost",
    description: "blacked out",
    status: "AVAILABLE",
    price: 6344
  }
];

// seed-data/index.ts
async function insertSeedData(keystoneContext) {
  console.log(`\u{1F331} Inserting Seed Data: ${products.length} Products`);
  for (const product of products) {
    console.log(`  \u{1F6CD}\uFE0F Adding Product: ${product.name}`);
    await keystoneContext.db.Product.createOne({
      data: {
        ...product,
        photo: { create: { altText: product.description } }
      }
    });
  }
  console.log(`\u2705 Seed Data Inserted: ${products.length} Products`);
  process.exit();
}

// keystone.ts
var keystone_default = withAuth(
  (0, import_core2.config)({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL, /.+ember-.+\.vercel\.app.?$/],
        credentials: true
      }
    },
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL || "",
      async onConnect(keystoneContext) {
        if (process.argv.includes("--seed-data")) {
          await insertSeedData(keystoneContext);
        }
      }
    },
    lists,
    session,
    ui: {
      isAccessAllowed: ({ session: session2 }) => {
        return !!session2?.data;
      }
    },
    types: {
      path: ".keystone/types.ts"
    }
  })
);
//# sourceMappingURL=config.js.map
