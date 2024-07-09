import { configureStore } from '@reduxjs/toolkit'
import localeslice from './features/localeslice'
import themeslice from './features/themeslice'
import authslice from './features/authslice'
import cartslice from './features/cartslice'
import filterslice from './features/filterslice'

export const Store = () => {
  return configureStore({
    reducer: {
      localeslice,
      theme: themeslice,
      auth: authslice,
      cart: cartslice,
      filters: filterslice,
    },
  })
}
