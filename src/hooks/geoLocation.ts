import { useState, useEffect } from 'react'

interface IGeoLocation {
  error?: boolean
  code?: number
  message?: string
  coords?: {
    latitude: number
    longitude: number
  }
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<IGeoLocation | null>(null)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            error: false,
            coords: position.coords
          })
        },
        error => {
          setLocation({
            error: true,
            code: error.code,
            message: error.message
          })
        }
      )
    } else {
      setLocation({
        error: true,
        code: 0,
        message: 'Geolocation is not supported by this browser'
      })
    }
  }, [])

  return location
}
