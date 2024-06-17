export const ironOreRecipe = {
	input: {},
	output: {
		ironOre: {
			income: 30,
			count: 5,
		},
	},
}

export const limestoneRecipe = {
	input: {},
	output: {
		limestone: {
			income: 30,
			count: 5,
		},
	},
}
export const copperOreRecipe = {
	input: {},
	output: {
		copperOre: {
			income: 30,
			count: 5,
		},
	},
}

export const concreteRecipe = {
	input: {
		limestone: {
			income: 45,
			count: 3,
		},
	},
	output: {
		concrete: {
			income: 15,
			count: 1,
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

export const copperIngotRecipe = {
	input: {
		copperOre: {
			income: 15,
			count: 3,
		},
	},
	output: {
		copperIngot: {
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

export const wireRecipe = {
	input: {
		copperIngot: {
			income: 15,
			count: 1,
		},
	},
	output: {
		wire: {
			income: 30,
			count: 2,
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
