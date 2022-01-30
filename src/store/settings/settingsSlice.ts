import { createSlice } from '@reduxjs/toolkit'

import { ISettings } from './types'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: 'dark',
    lang: 'en',
    units: 'metric'
  } as ISettings,
  reducers: {},
  extraReducers: {}
})

export default settingsSlice.reducer
