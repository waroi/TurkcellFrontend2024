import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  priceRange: [0, 1000],
  colors: [],
  sizes: [],
  styles: [],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload
    },
    setColors: (state, action) => {
      state.colors = action.payload
    },
    setSizes: (state, action) => {
      state.sizes = action.payload
    },
    setStyles: (state, action) => {
      state.styles = action.payload
    },
  },
})

export const { setCategories, setPriceRange, setColors, setSizes, setStyles } = filtersSlice.actions

export default filtersSlice.reducer
