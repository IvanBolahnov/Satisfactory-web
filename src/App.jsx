/* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from "react"
import Logo from "/logo.ico"
import "./App.css"

// import { miner, ironSmelter } from "./utils/buildings"
import {
	ironOreRecipe,
	ironIngotRecipe,
	ironPlateRecipe,
	ironRodRecipe,
	limestoneRecipe,
	concreteRecipe,
	portableMinerRecipe,
	copperOreRecipe,
	copperIngotRecipe,
	wireRecipe,
} from "./utils/recipes"

import TagItemList from "./components/tagItemsList/tagItemsList"
import { itemsSlice } from "./store/reducers/itemsSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { miner } from "./utils/buildings"

const { income, craft, addFactory, addAll } = itemsSlice.actions

function App() {
	const dispatch = useDispatch()
	const { items } = useSelector((state) => state.items)

	// income
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
			<div className="itemsList">
				<TagItemList items={items} tag="Ore"></TagItemList>
				<TagItemList items={items} tag="Ingots"></TagItemList>
				<TagItemList items={items} tag="Minerals"></TagItemList>
				<TagItemList items={items} tag="Standart parts"></TagItemList>
				<TagItemList items={items} tag="Tools"></TagItemList>
			</div>
			<div className="craft">
				<button
					onClick={() => {
						dispatch(craft(ironOreRecipe))
					}}
				>
					<img
						src={`/src/assets/images/items/${items.ironOre.imgUrl}`}
						width={50}
						height={50}
						alt="ironOre"
					/>
				</button>
				<button
					onClick={() => {
						dispatch(craft(copperOreRecipe))
					}}
				>
					<img
						src={`/src/assets/images/items/${items.copperOre.imgUrl}`}
						width={50}
						height={50}
						alt="cupperOre"
					/>
				</button>
				<button
					onClick={() => {
						dispatch(craft(limestoneRecipe))
					}}
				>
					<img
						src={`/src/assets/images/items/${items.limestone.imgUrl}`}
						width={50}
						height={50}
						alt="limestone"
					/>
				</button>
				<button
					onClick={() => {
						dispatch(craft(ironIngotRecipe))
					}}
				>
					<img
						src={`/src/assets/images/items/${items.ironIngot.imgUrl}`}
						width={50}
						height={50}
						alt="ironIngot"
					/>
				</button>
				<button
					onClick={() => {
						dispatch(craft(copperIngotRecipe))
					}}
				>
					<img
						src={`/src/assets/images/items/${items.copperIngot.imgUrl}`}
						width={50}
						height={50}
						alt="copperIngot"
					/>
				</button>
				<button
					onClick={() => {
						dispatch(craft(concreteRecipe))
					}}
				>
					<img
						src={`/src/assets/images/items/${items.concrete.imgUrl}`}
						width={50}
						height={50}
						alt="concrete"
					/>
				</button>
				<button
					onClick={() => {
						dispatch(craft(ironPlateRecipe))
					}}
				>
					<img
						src={`/src/assets/images/items/${items.ironPlate.imgUrl}`}
						width={50}
						height={50}
						alt="ironPlate"
					/>
				</button>
				<button
					onClick={() => {
						dispatch(craft(wireRecipe))
					}}
				>
					<img
						src={`/src/assets/images/items/${items.wire.imgUrl}`}
						width={50}
						height={50}
						alt="wire"
					/>
				</button>
				<button
					onClick={() => {
						dispatch(craft(ironRodRecipe))
					}}
				>
					<img
						src={`/src/assets/images/items/${items.ironRod.imgUrl}`}
						width={50}
						height={50}
						alt="ironRod"
					/>
				</button>
				<button
					onClick={() => {
						dispatch(craft(portableMinerRecipe))
					}}
				>
					<img
						src={`/src/assets/images/items/${items.portableMiner.imgUrl}`}
						width={50}
						height={50}
						alt="portableMiner"
					/>
				</button>
			</div>
			<div className="build">
				<button
					onClick={() => {
						dispatch(addFactory({ ...miner(ironOreRecipe, 1, 1) }))
					}}
				>
					iron miner
				</button>
				<button
					onClick={() => {
						dispatch(addFactory({ ...miner(limestoneRecipe, 1, 1) }))
					}}
				>
					limestone miner
				</button>
			</div>
			<button
				onClick={() => {
					dispatch(addAll(300))
				}}
			>
				debug
			</button>
		</>
	)
}

export default App
