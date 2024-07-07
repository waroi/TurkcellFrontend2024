import { configureStore } from '@reduxjs/toolkit'
import localeslice from './features/localeslice'
import themeslice from './features/themeslice'
import authslice from './features/authslice'

export const Store = () => {
  return configureStore({
    reducer: {
      localeslice,
      theme: themeslice,
      auth: authslice,
    },
  })
}
