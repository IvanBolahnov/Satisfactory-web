import { ironIngotRecipe } from "./recipes"

export default class buildings {
	constructor(recipe, cost) {
		this.input = recipe.input
		this.output = recipe.output
		this.cost = cost
	}
}

export const miner = (recipe, minerLvl, oreLvl) => {
	const input = recipe.input
	const output = recipe.output
	const cost = {}

	for (const ore in output) {
		output[ore].income = output[ore].income * 2 ** (oreLvl ** minerLvl - 1)
	}

	switch (minerLvl) {
		case 1:
			cost.portableMiner = {
				count: 1,
			}
			cost.ironPlate = {
				count: 10,
			}
			cost.concrete = {
				count: 10,
			}
			break
		case 2:
			cost.portableMiner = {
				count: 2,
			}
			cost.encasedIndustrialBeam = {
				count: 10,
			}
			cost.steelPipe = {
				count: 20,
			}
			cost.modularFrame = {
				count: 10,
			}
			break
		case 3:
			cost.portableMiner = {
				count: 3,
			}
			cost.steelPipe = {
				count: 50,
			}
			cost.supercomputer = {
				count: 5,
			}
			cost.fusedModularFrame = {
				count: 10,
			}
			cost.turboMotor = {
				count: 3,
			}
			break
		default:
			break
	}

	return new buildings({ input, output }, cost)
}

export const smelter = (recipe) => {
	const input = recipe.input
	const output = recipe.output
	const cost = {
		ironRod: {
			count: 5,
		},
		wire: {
			count: 8,
		},
	}

	return new buildings({ input, output }, cost)
}

export const ironSmelter = new buildings(ironIngotRecipe, {
	ironIngot: {
		count: 120,
	},
})
