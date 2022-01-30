import { Flex, Heading, Text } from '@chakra-ui/react'

export const EnableLocation = () => {
  return (
    <Flex py={10} px={8} flexDirection="column">
      <Heading>Oops!</Heading>

      <Text mt={8}>
        We need your location to show you the weather. Please enable your
        location in your browser settings.
      </Text>
    </Flex>
  )
}
