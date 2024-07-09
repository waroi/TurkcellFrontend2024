import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  selectedColor: null,
  selectedSize: null,
  totalPrice: 0,
  totalDiscount: 0,
}

const calculateTotals = (cartItems) => {
  let totalPrice = 0
  let totalDiscount = 0

  cartItems.forEach((item) => {
    const itemTotalPrice = item.price * item.quantity
    totalPrice += itemTotalPrice

    if (item.discount) {
      const discountPercentage = parseFloat(item.discount) / 100
      const itemDiscount = itemTotalPrice * discountPercentage
      totalDiscount += itemDiscount
    }
  })

  return { totalPrice, totalDiscount }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, img, selectedColor, selectedSize, discount } = action.payload

      const existingItem = state.cartItems.find(
        (item) =>
          item.id === id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize,
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push({
          id,
          title,
          price,
          img,
          quantity: 1,
          selectedColor,
          selectedSize,
          discount,
        })
      }

      const totals = calculateTotals(state.cartItems)
      state.totalPrice = totals.totalPrice
      state.totalDiscount = totals.totalDiscount
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)

      const totals = calculateTotals(state.cartItems)
      state.totalPrice = totals.totalPrice
      state.totalDiscount = totals.totalDiscount
    },
    incrementQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item,
      )

      const totals = calculateTotals(state.cartItems)
      state.totalPrice = totals.totalPrice
      state.totalDiscount = totals.totalDiscount
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
export const selectTotalPrice = (state) => state.cart.totalPrice
export const selectTotalDiscount = (state) => state.cart.totalDiscount
