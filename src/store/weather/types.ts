export interface IWeatherCity {
  id: number
  name: string
}

export interface IWeatherData {
  id: number
  name: string
  formattedDate?: string
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  mainFormatted?: {
    temp?: string
    feels_like?: string
    temp_min?: string
    temp_max?: string
    pressure?: string
    windSpeed?: string
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: number
  }
  sys: {
    country: string
  }
}

export interface IWeatherError {
  message?: string
  cod?: string
}

export interface IWeatherParameters {
  q?: string
  id?: number
  lat?: number
  lon?: number
  units?: 'standard' | 'metric' | 'imperial'
  lang?: 'en' | 'pt_br'
}

export interface IWeather {
  weather: IWeatherData | null
  error: IWeatherError | null
  recentSearch: IWeatherCity[]
  loading: boolean
}
