import { combineReducers } from '@reduxjs/toolkit'

import weather from './weather/weatherSlice'
import modal from './modal/modalSlice'

export const combinedReducer = combineReducers({
  weather,
  modal
})
