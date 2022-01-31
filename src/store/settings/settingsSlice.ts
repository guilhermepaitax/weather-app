import { createSlice } from '@reduxjs/toolkit'

import { ISettings } from './types'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    lang: 'en',
    units: 'metric'
  } as ISettings,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload
    },
    setUnits: (state, action) => {
      state.units = action.payload
    }
  },
  extraReducers: {}
})

export const { setLang, setUnits } = settingsSlice.actions

export default settingsSlice.reducer
