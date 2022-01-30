import { combineReducers } from '@reduxjs/toolkit'

import weather from './weather/weatherSlice'
import modal from './modal/modalSlice'
import settings from './settings/settingsSlice'

export const combinedReducer = combineReducers({
  weather,
  modal,
  settings
})
