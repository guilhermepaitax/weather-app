import { Flex, Heading, Text, Image, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from '../../hooks/redux'
import { closeModal } from '../../store/modal/modalSlice'

import imgEnable from '../../assets/img/enable-location.jpeg'

export const EnableLocation = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <Flex py={10} px={8} flexDirection="column">
      <Heading>Oops!</Heading>

      <Text mt={8}>{t('We need your location to show you the weather')}</Text>

      <Image
        src={imgEnable}
        borderRadius={28}
        mx="auto"
        mt={8}
        alt="Enable location"
      />

      <Button onClick={handleCloseModal} mt={5}>
        {t('Ok, Understood!')}
      </Button>
    </Flex>
  )
}
