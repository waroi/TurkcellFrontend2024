import { configureStore } from '@reduxjs/toolkit'
import localeslice from './features/localeslice'

export const Store = () => {
  return configureStore({
    reducer: {
      localeslice,
    },
  })
}
