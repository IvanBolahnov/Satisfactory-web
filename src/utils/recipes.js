export const ironOreRecipe = {
	input: {},
	output: {
		ironOre: {
			income: 0,
			count: 5,
		},
	},
}

export const ironIngotRecipe = {
	input: {
		ironOre: {
			income: 15,
			count: 3,
		},
	},
	output: {
		ironIngot: {
			income: 15,
			count: 3,
		},
	},
}

export const ironPlateRecipe = {
	input: {
		ironIngot: {
			income: 30,
			count: 3,
		},
	},
	output: {
		ironPlate: {
			income: 20,
			count: 2,
		},
	},
}

export const ironRodRecipe = {
	input: {
		ironIngot: {
			income: 15,
			count: 1,
		},
	},
	output: {
		ironRod: {
			income: 15,
			count: 1,
		},
	},
}

export const portableMinerRecipe = {
	input: {
		ironRod: {
			income: 0,
			count: 4,
		},
		ironPlate: {
			income: 0,
			count: 2,
		},
	},
	output: {
		portableMiner: {
			income: 0,
			count: 1,
		},
	},
}
