/* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from "react"
import Logo from "/logo.ico"
import "./App.css"

import { miner, ironSmelter } from "./utils/buildings"
import {
	ironOreRecipe,
	ironIngotRecipe,
	ironPlateRecipe,
	ironRodRecipe,
} from "./utils/recipes"

import { itemsSlice } from "./store/reducers/itemsSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const { addFactory, income, craft } = itemsSlice.actions

function App() {
	const dispatch = useDispatch()

	const { items } = useSelector((state) => state.items)

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(income())
		}, 100)

		return () => clearInterval(interval)
	}, [items])

	return (
		<>
			<div>
				<a href="/">
					<img src={Logo} className="logo" alt="Logo" />
				</a>
			</div>
			<h1>Satisfactory Web</h1>
			<p>
				<img
					src={`/src/assets/${items.ironOre.imgUrl}`}
					width={50}
					height={50}
					className="logo"
					alt="Logo"
				/>
				{`${items.ironOre.count.toFixed(1)} (${items.ironOre.income}/min)`}
			</p>
			<p>
				<img
					src={`/src/assets/${items.ironIngot.imgUrl}`}
					width={50}
					height={50}
					className="logo"
					alt="Logo"
				/>
				{`${items.ironIngot.count.toFixed(1)} (${items.ironIngot.income}/min)`}
			</p>
			<div className="card">
				<button
					onClick={() => {
						dispatch(addFactory({ ...miner("iron", 1, 1) }))
					}}
				>
					{`Build iron miner (cost: 120 iron ingots)`}
				</button>
				<button
					onClick={() => {
						dispatch(addFactory({ ...ironSmelter }))
					}}
				>
					{`Build iron smelter (cost: 120 iron ingots)`}
				</button>
				<button
					onClick={() => {
						dispatch(craft(ironOreRecipe))
					}}
				>
					{`craft iron ore`}
				</button>
				<button
					onClick={() => {
						dispatch(craft(ironIngotRecipe))
					}}
				>
					{`craft iron ingot`}
				</button>
			</div>
		</>
	)
}

export default App
