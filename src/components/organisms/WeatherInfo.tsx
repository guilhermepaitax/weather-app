import { Flex } from '@chakra-ui/react'

import { useAppSelector } from '../../hooks/redux'

import { WeatherLoactionInfo } from '../molecules/WeatherLoactionInfo'
import { NotFoundCard } from '../molecules/NotFoundCard'
import { NoDataCard } from '../molecules/NoDataCard'
import { WeatherCards } from './WeatherCards'

export const WeatherInfo = () => {
  const { weather, error } = useAppSelector(state => state.weather)

  return (
    <Flex as="section" flexDirection="column" mt={20}>
      {!error && !weather && <NoDataCard />}
      {error && <NotFoundCard />}
      {weather && (
        <>
          <WeatherLoactionInfo />
          <WeatherCards />
        </>
      )}
    </Flex>
  )
}
