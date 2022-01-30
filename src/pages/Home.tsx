import { useEffect } from 'react'
import { Container, Grid, GridItem } from '@chakra-ui/react'

import { useAppDispatch } from '../hooks/redux'
import { useGeoLocation } from '../hooks/geoLocation'

import { getWeather } from '../store/weather/weatherSlice'

import { Header } from '../components/organisms/Header'
import { WeatherHeading } from '../components/molecules/WeatherHeading'
import { WeatherInfo } from '../components/organisms/WeatherInfo'
import { RecentSearches } from '../components/organisms/RecentSearches'

export const Home = () => {
  const dispatch = useAppDispatch()
  const location = useGeoLocation()

  useEffect(() => {
    if (location?.coords) {
      dispatch(
        getWeather({
          lat: location?.coords.latitude,
          lon: location?.coords.longitude
        })
      )
    }
  }, [location, dispatch])

  return (
    <>
      <Header />
      <Container maxW="container.xl" mt={10}>
        <Grid
          columnGap={{
            lg: 10,
            md: 0
          }}
          rowGap={6}
          templateColumns={{
            lg: 'repeat(3, 1fr)',
            md: 'repeat(1, 1fr)'
          }}
        >
          <GridItem as="main" colSpan={2}>
            <WeatherHeading />
            <WeatherInfo />
          </GridItem>

          <GridItem>
            <RecentSearches />
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
