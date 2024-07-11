import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
