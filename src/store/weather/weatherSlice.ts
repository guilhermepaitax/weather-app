import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../services/api'

import {
  IWeather,
  IWeatherData,
  IWeatherError,
  IWeatherParameters
} from './types'

export const getWeather = createAsyncThunk<
  IWeatherData,
  IWeatherParameters,
  { rejectValue: IWeatherError }
>('weather/getWeather', async (parameters, { rejectWithValue }) => {
  try {
    const response = await api.get('/weather', {
      params: {
        appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        ...parameters
      }
    })

    const data = response.data

    return data
  } catch (error: any) {
    if (error?.isAxiosError) {
      return rejectWithValue(error.response?.data as IWeatherError)
    }

    return rejectWithValue({
      cod: '500',
      message: 'Internal server error'
    })
  }
})

const initialState = {
  weather: null,
  error: null,
  recentSearch: []
} as IWeather

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weather = action.payload
        state.error = null
        if (!state.recentSearch.some(city => city.id === action.payload.id)) {
          state.recentSearch = [
            ...state.recentSearch,
            {
              id: action.payload.id,
              name: action.payload.name
            }
          ]
        }
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.error = action.payload ? action.payload : null
        state.weather = null
      })
  }
})

export default weatherSlice.reducer
