import { combineReducers, configureStore } from "@reduxjs/toolkit"
import itemsReducer from "./reducers/itemsSlice"
// import interfaceReducer from "./reducers/interfaceSlice"

const rootReducer = combineReducers({
	items: itemsReducer,
	// interface: interfaceReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}
