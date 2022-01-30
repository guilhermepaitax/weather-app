import { Flex, Text } from '@chakra-ui/react'
import { WiSmallCraftAdvisory } from 'react-icons/wi'

import { useAppSelector } from '../../hooks/redux'

import { Card } from '../atoms/Card'

export const PressureCard = () => {
  const { weather } = useAppSelector(state => state.weather)

  return (
    <Card>
      <Flex flex={1} align="center" justifyContent="center">
        <WiSmallCraftAdvisory size={52} />
        <Text fontWeight="500" ml={2} fontSize={16}>
          Atmospheric pressure
        </Text>
      </Flex>

      <Flex flex={1} align="center" justifyContent="center">
        <Text fontWeight="bold" fontSize={28}>
          {weather?.mainFormatted?.pressure || 0}
        </Text>
      </Flex>
    </Card>
  )
}
