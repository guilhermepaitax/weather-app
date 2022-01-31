import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '..'

import api from '../../services/api'

import {
  getSuffix,
  getSuffixSpeed,
  getLanguage
} from '../../utils/formatValues'

import {
  IWeather,
  IWeatherData,
  IWeatherError,
  IWeatherParameters
} from './types'

export const getWeather = createAsyncThunk<
  IWeatherData,
  IWeatherParameters,
  { rejectValue: IWeatherError; state: RootState }
>('weather/getWeather', async (parameters, { rejectWithValue, getState }) => {
  try {
    const { lang, units } = getState().settings

    const response = await api.get<IWeatherData>('/weather', {
      params: {
        appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        ...parameters,
        lang,
        units
      }
    })

    const data = response.data

    if (data?.main?.temp) data.main.temp = Math.round(data.main.temp)

    if (data?.main) {
      data.mainFormatted = {
        temp: `${Math.round(data.main.temp)}${getSuffix(units)}`,
        feels_like: `${Math.round(data.main.feels_like)}${getSuffix(units)}`,
        temp_min: `${Math.round(data.main.temp_min)}${getSuffix(units)}`,
        temp_max: `${Math.round(data.main.temp_max)}${getSuffix(units)}`,
        pressure: `${data.main.pressure} hPa`,
        windSpeed: `${data.wind.speed} ${getSuffixSpeed(units)}`
      }
    }

    data.formattedDate = new Date().toLocaleDateString(getLanguage(lang), {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    })

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
  recentSearch: [],
  loading: false
} as IWeather

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWeather.pending, state => {
        state.loading = true
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weather = action.payload
        state.error = null
        state.loading = false
        if (!state.recentSearch.some(city => city.id === action.payload.id)) {
          state.recentSearch = [
            {
              id: action.payload.id,
              name: action.payload.name
            },
            ...state.recentSearch
          ]
        }
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.error = action.payload ? action.payload : null
        state.weather = null
        state.loading = false
      })
  }
})

export default weatherSlice.reducer
