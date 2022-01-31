import { createSlice } from '@reduxjs/toolkit'
import i18n from 'i18next'

import { ISettings } from './types'

import { getLanguage } from '../../utils/formatValues'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    lang: 'en',
    units: 'metric'
  } as ISettings,
  reducers: {
    setLang: (state, action) => {
      i18n.changeLanguage(getLanguage(action.payload))
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
