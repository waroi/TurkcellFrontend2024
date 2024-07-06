const { createSlice } = require('@reduxjs/toolkit')

const localeSlice = createSlice({
  name: 'locale',
  initialState: { locale: 'tr' },
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload
    },
  },
})

export const { setLocale } = localeSlice.actions

export default localeSlice.reducer
