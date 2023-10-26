function timestamp() {
	// sometime in the last 30 days
	const stampy =
		Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30)
	return new Date(stampy).toISOString()
}

export const products = [
	{
		name: "Yeti Hondo",
		description: "soo nice",
		status: "AVAILABLE",
		price: 3423,
	},
	{
		name: "Airmax 270",
		description: "Great shoes!",
		status: "AVAILABLE",
		price: 5234,
	},
	{
		name: "KITH Hoodie",
		description: "Love this hoodie",
		status: "AVAILABLE",
		price: 23562,
	},
	{
		name: "Fanorak",
		description: "Super hip. Comes in a number of colours",
		status: "AVAILABLE",
		price: 252342,
	},
	{
		name: "Nike Vapormax",
		description: "Kind of squeaky on some floors",
		status: "AVAILABLE",
		price: 83456,
	},
	{
		name: "Yeti Cooler",
		description: "Who spends this much on a cooler?!",
		status: "AVAILABLE",
		price: 75654,
	},
	{
		name: "Naked and Famous Denim",
		description: "Japanese Denim, made in Canada",
		status: "AVAILABLE",
		price: 10924,
	},
	{
		name: "Rimowa Luggage",
		description: "S T E A L T H",
		status: "AVAILABLE",
		price: 47734,
	},
	{
		name: "Black Hole ",
		description: "Outdoorsy ",
		status: "AVAILABLE",
		price: 4534,
	},
	{
		name: "Nudie Belt",
		description: "Sick design",
		status: "AVAILABLE",
		price: 5234,
	},
	{
		name: "Goose",
		description: "Keep warm.",
		status: "AVAILABLE",
		price: 74544,
	},
	{
		name: "Ultraboost",
		description: "blacked out",
		status: "AVAILABLE",
		price: 6344,
	},
]
