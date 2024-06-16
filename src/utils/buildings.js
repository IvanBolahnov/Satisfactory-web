import { ironIngotRecipe } from "./recipes"

export default class buildings {
	constructor(recipe, cost) {
		this.input = recipe.input
		this.output = recipe.output
		this.cost = cost
	}
}

export const miner = (ore, minerLvl, oreLvl) => {
	const outname = ore + "Ore"

	const input = {}
	const output = {}
	const cost = {}

	output[outname] = {
		income: 15 * 2 ** (oreLvl ** minerLvl),
	}

	switch (minerLvl) {
		case 1:
			cost["portableMiner"] = {
				count: 1,
			}
			cost["ironPlate"] = {
				count: 10,
			}
			cost["concrete"] = {
				count: 10,
			}
			break
		case 2:
			cost["portableMiner"] = {
				count: 2,
			}
			cost["encasedIndustrialBeam"] = {
				count: 10,
			}
			cost["steelPipe"] = {
				count: 20,
			}
			cost["modularFrame"] = {
				count: 10,
			}
			break
		case 3:
			cost["portableMiner"] = {
				count: 3,
			}
			cost["steelPipe"] = {
				count: 50,
			}
			cost["supercomputer"] = {
				count: 5,
			}
			cost["fusedModularFrame"] = {
				count: 10,
			}
			cost["turboMotor"] = {
				count: 3,
			}
			break
		default:
			break
	}

	return new buildings({ input, output }, cost)
}

export const ironSmelter = new buildings(ironIngotRecipe, {
	ironIngot: {
		count: 120,
	},
})
