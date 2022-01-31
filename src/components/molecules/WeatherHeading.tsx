import { Flex, Heading, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export const WeatherHeading = () => {
  const { t } = useTranslation()

  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Heading fontSize={40} fontWeight="bold" my={2}>
        {t('Weather Forecast')}
      </Heading>
      <Text fontSize={16} fontWeight="normal" color="GrayText">
        {t('Get the forecast for today')}
      </Text>
    </Flex>
  )
}
