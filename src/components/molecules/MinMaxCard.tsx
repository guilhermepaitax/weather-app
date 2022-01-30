import { Grid, Flex, Text } from '@chakra-ui/react'
import { WiThermometerExterior, WiThermometer } from 'react-icons/wi'

import { useAppSelector } from '../../hooks/redux'

import { Card } from '../atoms/Card'

export const MinMaxCard = () => {
  const { weather } = useAppSelector(state => state.weather)

  if (!weather) return null

  return (
    <Card align="center" justify="center" px={4}>
      <Grid
        gap={{
          lg: 6,
          base: 4
        }}
        templateColumns={{
          lg: 'repeat(3, 1fr)',
          base: 'repeat(3, 1fr)'
        }}
      >
        <Flex flexDirection="column" align="center" justifyContent="center">
          <Flex align="center">
            <WiThermometerExterior color="#3E61FF" size={32} />
            <Text fontWeight="500">Min</Text>
          </Flex>
          <Text fontWeight="bold" mt={2} fontSize={28}>
            {weather?.mainFormatted?.temp_min}
          </Text>
        </Flex>

        <Flex flexDirection="column" align="center" justifyContent="center">
          <Flex align="center">
            <WiThermometer color="#FF623E" size={32} />
            <Text fontWeight="500">Max</Text>
          </Flex>
          <Text fontWeight="bold" mt={2} fontSize={28}>
            {weather?.mainFormatted?.temp_max}
          </Text>
        </Flex>

        <Flex flexDirection="column" align="center" justifyContent="center">
          <Flex align="center">
            <WiThermometer size={32} />
            <Text fontWeight="500">Feels</Text>
          </Flex>
          <Text fontWeight="bold" mt={2} fontSize={28}>
            {weather?.mainFormatted?.feels_like}
          </Text>
        </Flex>
      </Grid>
    </Card>
  )
}
