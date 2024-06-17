import { createSlice } from "@reduxjs/toolkit"

import { items } from "../../utils/items"

const initialState = {
	items,
}

export const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		addFactory: (state, action) => {
			const items = state.items
			const factory = action.payload

			// conditions
			for (const item in factory.input) {
				if (items[item].income < factory.input[item].income) {
					return
				}
			}
			for (const item in factory.cost) {
				if (items[item].count < factory.cost[item].count) {
					return
				}
			}

			// input
			for (const item in factory.input) {
				items[item].income -= factory.input[item].income
			}
			// cost
			for (const item in factory.cost) {
				items[item].count -= factory.cost[item].count
			}

			// output
			for (const item in factory.output) {
				items[item].income += factory.output[item].income
			}
		},

		income: (state) => {
			for (const item in state.items) {
				state.items[item].count += state.items[item].income / 600
			}
		},

		craft: (state, action) => {
			const items = state.items
			const factory = action.payload

			// condition
			for (const item in factory.input) {
				if (items[item].count < factory.input[item].count) {
					return
				}
			}

			// input
			for (const item in factory.input) {
				items[item].count -= factory.input[item].count
			}

			// output
			for (const item in factory.output) {
				items[item].count += factory.output[item].count
			}
		},

		addAll: (state, action) => {
			const items = state.items

			for (const item in items) {
				items[item].count += action.payload
			}
		},
	},
})

export default itemsSlice.reducer
