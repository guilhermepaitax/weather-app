import { Flex, Heading, Text } from '@chakra-ui/react'

export const WeatherHeading = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Heading fontSize={40} fontWeight="bold" my={2}>
        Weather Forecast
      </Heading>
      <Text fontSize={16} fontWeight="normal" color="GrayText">
        Get the forecast for today, in the thousands of places Worldwide.
      </Text>
    </Flex>
  )
}
