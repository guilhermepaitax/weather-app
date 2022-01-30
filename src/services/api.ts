import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_OPEN_WEATHER_API_URL as string
})

export default api
