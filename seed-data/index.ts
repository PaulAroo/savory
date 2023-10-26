import { KeystoneContext } from "@keystone-6/core/types"

import { products } from "./data"

export async function insertSeedData(keystoneContext: KeystoneContext) {
	console.log(`🌱 Inserting Seed Data: ${products.length} Products`)
	for (const product of products) {
		console.log(`  🛍️ Adding Product: ${product.name}`)

		await keystoneContext.db.Product.createOne({
			data: {
				...product,
				photo: { create: { altText: product.description } },
			},
		})
	}

	console.log(`✅ Seed Data Inserted: ${products.length} Products`)
	process.exit()
}
