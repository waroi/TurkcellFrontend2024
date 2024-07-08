import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  selectedColor: null,
  selectedSize: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, img, selectedColor, selectedSize } = action.payload

      const existingItem = state.cartItems.find(
        (item) =>
          item.id === id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize,
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push({ id, title, price, img, quantity: 1, selectedColor, selectedSize })
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

    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload
    },
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload
    },
  },
})

export const { addToCart, removeFromCart, incrementQuantity, setSelectedColor, setSelectedSize } =
  cartSlice.actions
export default cartSlice.reducer
export const selectCartItems = (state) => state.cart.cartItems
export const selectSelectedColor = (state) => state.cart.selectedColor
export const selectSelectedSize = (state) => state.cart.selectedSize
