import {
  Flex,
  Text,
  Image,
  ImageProps,
  useMediaQuery,
  HStack,
  Center
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { WiStrongWind, WiCloud } from 'react-icons/wi'
import { MdWater } from 'react-icons/md'

import { useAppSelector } from '../../hooks/redux'

import { Card } from '../atoms/Card'

export const MotionImage = motion<ImageProps>(Image)

export const TemperatureCard = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 768px)')
  const { weather } = useAppSelector(state => state.weather)

  if (!weather) return null

  return (
    <Card p={2} borderRadius={28} flexDirection="column">
      <Flex
        flex={1}
        px={12}
        py={8}
        bgGradient="linear(to-b, #15C0F6, #0E58D0)"
        borderRadius={28}
        flexDirection="column"
        alignItems={{
          md: 'flex-start',
          base: 'center'
        }}
        justifyContent={{
          md: 'flex-start',
          base: 'center'
        }}
      >
        {isLargerThan1280 ? (
          <MotionImage
            src={`src/assets/iconsWeather/${
              weather?.weather[0]?.icon || '01d'
            }.png`}
            alt="weather image"
            drag
            w={64}
            right={10}
            top={-20}
            position="absolute"
            cursor="pointer"
            whileTap={{ scale: 0.9 }}
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50
            }}
          />
        ) : (
          <Image
            src={`src/assets/iconsWeather/${
              weather?.weather[0]?.icon || '01d'
            }.png`}
            alt="weather image"
            w={48}
            mb={4}
          />
        )}
        <Flex
          flexDirection="column"
          alignItems={{
            md: 'flex-start',
            base: 'center'
          }}
        >
          <Text
            color="white"
            zIndex={1}
            fontSize={[72, 98]}
            fontWeight="bold"
            lineHeight="1"
          >
            {weather?.mainFormatted?.temp}
          </Text>
          <Text
            color="white"
            fontSize={16}
            fontWeight="500"
            mt={2}
            textTransform="capitalize"
          >
            {weather?.weather[0]?.description}
          </Text>
          <Text
            color="whiteAlpha.600"
            fontSize={14}
            fontWeight="500"
            mt={1}
            textTransform="capitalize"
          >
            {weather?.formattedDate}
          </Text>
        </Flex>
      </Flex>
      <HStack
        d="flex"
        alignItems="center"
        justifyContent={{
          md: 'flex-start',
          base: 'center'
        }}
        px={12}
        py={3}
        spacing={{
          md: 10,
          base: 4
        }}
      >
        <Center flexDirection="column">
          <WiStrongWind size={26} />
          <Text fontSize={13} fontWeight="500">
            {weather?.wind?.speed} m/s
          </Text>
          <Text color="GrayText" fontSize={13} fontWeight="500">
            Wind
          </Text>
        </Center>
        <Center flexDirection="column">
          <MdWater size={26} />
          <Text fontSize={13} fontWeight="500">
            {weather?.main?.humidity}%
          </Text>
          <Text color="GrayText" fontSize={13} fontWeight="500">
            Humidity
          </Text>
        </Center>
        <Center flexDirection="column">
          <WiCloud size={26} />
          <Text fontSize={13} fontWeight="500">
            {weather?.clouds?.all}%
          </Text>
          <Text color="GrayText" fontSize={13} fontWeight="500">
            Cloudiness
          </Text>
        </Center>
      </HStack>
    </Card>
  )
}
