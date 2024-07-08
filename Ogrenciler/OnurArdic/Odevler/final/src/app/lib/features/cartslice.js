import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price } = action.payload

      if (state.cartItems.some((item) => item.id === id)) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      } else {
        state.cartItems.push({ id, title, price, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
    },
    incrementQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item,
      )
    },
  },
})

export const { addToCart, removeFromCart, incrementQuantity } = cartSlice.actions
export default cartSlice.reducer
export const selectCartItems = (state) => state.cart.cartItems
