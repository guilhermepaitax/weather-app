import { useCallback } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { MdRefresh } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { IconButton } from '../atoms/IconButton'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { getWeather } from '../../store/weather/weatherSlice'

export const WeatherLoactionInfo = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const { weather, loading } = useAppSelector(state => state.weather)

  const handleRefresh = useCallback(() => {
    if (weather) dispatch(getWeather({ id: weather.id }))
  }, [dispatch, weather])

  if (!weather) return null

  return (
    <Flex flexDirection="column">
      <Text fontSize={16} color="GrayText" fontWeight="normal">
        {t("Today's Report in")}
      </Text>
      <Flex alignItems="center" mb={4}>
        <Text fontSize={34} fontWeight="bold">
          {weather?.name}
        </Text>

        <IconButton
          ml={4}
          onClick={handleRefresh}
          isLoading={loading}
          aria-label={t('Refresh data')}
          iconElement={MdRefresh}
          iconProps={{
            fontSize: 20
          }}
        />
      </Flex>
    </Flex>
  )
}
