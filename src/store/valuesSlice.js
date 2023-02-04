import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cardname: "",
	cardnumber: "",
	cardmonth: "",
	cardyear: "",
	cardcvc: "",
}

export const valuesSlice = createSlice({
	name: "values",
	initialState,
	reducers: {
		updateValue: (state, action) => action.payload,
	},
})

export const { updateValue } = valuesSlice.actions

export default valuesSlice.reducer
