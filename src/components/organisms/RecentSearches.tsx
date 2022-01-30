import { useCallback } from 'react'
import { Divider, Text } from '@chakra-ui/react'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { IWeatherCity } from '../../store/weather/types'
import { getWeather } from '../../store/weather/weatherSlice'
import { Card } from '../atoms/Card'
import { ActionList } from '../molecules/ActionList'

export const RecentSearches = () => {
  const dispatch = useAppDispatch()
  const { recentSearch } = useAppSelector(state => state.weather)

  const handleSearchRecent = useCallback((location: IWeatherCity) => {
    dispatch(getWeather({ id: location.id }))
  }, [])

  return (
    <Card
      flexDirection="column"
      px={10}
      pb={8}
      d={{
        md: 'flex',
        base: 'none'
      }}
    >
      <Text fontSize={18} fontWeight="500" mb={4}>
        Recent Searches
      </Text>
      {recentSearch?.length > 1 ? (
        <>
          <Divider my={4} />
          <ActionList
            data={recentSearch}
            maxH={460}
            overflowY="auto"
            onClick={handleSearchRecent}
          />
        </>
      ) : (
        <Text fontSize={16} color="GrayText" fontWeight="normal" mb={3}>
          No recent searches
        </Text>
      )}
    </Card>
  )
}