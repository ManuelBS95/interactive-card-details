import { configureStore } from "@reduxjs/toolkit"
import valuesReducer from "../store/valuesSlice"
export const store = configureStore({
	reducer: {
		values: valuesReducer,
	},
})
