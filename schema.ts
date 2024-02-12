import "dotenv/config"
import { list } from "@keystone-6/core"
import { allowAll } from "@keystone-6/core/access"
import { cloudinaryImage } from "@keystone-6/cloudinary"
import {
	text,
	password,
	timestamp,
	select,
	integer,
	relationship,
} from "@keystone-6/core/fields"

import type { Lists } from "./.keystone/types"

export const lists: Lists = {
	User: list({
		access: allowAll,
		fields: {
			name: text({ validation: { isRequired: true } }),

			email: text({
				validation: { isRequired: true },
				isIndexed: "unique",
			}),

			password: password({ validation: { isRequired: true } }),

			createdAt: timestamp({
				defaultValue: { kind: "now" },
			}),
		},
	}),

	Product: list({
		access: allowAll,
		fields: {
			name: text({ validation: { isRequired: true } }),
			description: text({
				ui: {
					displayMode: "textarea",
				},
			}),
			photo: relationship({
				ref: "ProductImage.product",
				ui: {
					displayMode: "cards",
					cardFields: ["image", "altText"],
					inlineCreate: { fields: ["image", "altText"] },
					inlineEdit: { fields: ["image", "altText"] },
				},
			}),
			status: select({
				options: [
					{ label: "Draft", value: "DRAFT" },
					{ label: "Available", value: "AVAILABLE" },
					{ label: "Unavailable", value: "UNAVAILABLE" },
				],
				defaultValue: "DRAFT",
				ui: {
					displayMode: "segmented-control",
					createView: { fieldMode: "hidden" },
				},
			}),
			price: integer(),
		},
		ui: {
			listView: {
				initialColumns: ["name", "description", "status", "price"],
			},
		},
	}),

	ProductImage: list({
		access: allowAll,
		fields: {
			image: cloudinaryImage({
				cloudinary: {
					cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
					apiKey: process.env.CLOUDINARY_API_KEY || "",
					apiSecret: process.env.CLOUDINARY_API_SECRET || "",
					folder: process.env.CLOUDINARY_API_FOLDER,
				},
				label: "Source",
			}),
			altText: text(),
			product: relationship({ ref: "Product.photo" }),
		},
		ui: {
			listView: {
				initialColumns: ["image", "altText", "product"],
			},
		},
	}),
}
