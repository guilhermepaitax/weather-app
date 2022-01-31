import { useCallback } from 'react'
import { Text, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from '../../hooks/redux'
import { openModal } from '../../store/modal/modalSlice'

import imgWind from '../../assets/img/wind.png'

import { Card } from '../atoms/Card'
import { Search } from '../organisms/Search'

export const NotFoundCard = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const handleSearch = useCallback(() => {
    dispatch(
      openModal({
        children: <Search />
      })
    )
  }, [dispatch])

  return (
    <Card
      minH={240}
      bg="yellow.400"
      p={{
        md: 10,
        base: 6
      }}
      bgImage={`url(${imgWind})`}
      backgroundSize={{
        md: '55%',
        base: '70%'
      }}
      flexDirection="column"
      backgroundRepeat="no-repeat"
      backgroundPosition="100% 50%"
    >
      <Text
        color="yellow.600"
        fontSize={44}
        fontWeight="bold"
        lineHeight={1.15}
        maxW={350}
      >
        {t('Sorry, place not found.')}
      </Text>
      <Button
        mt={6}
        py={6}
        maxW={260}
        onClick={handleSearch}
        fontWeight="500"
        bg="yellow.500"
        color="yellow.200"
        _hover={{ bg: 'yellow.600' }}
        _active={{ bg: 'yellow.700' }}
      >
        {t('Try search for another place')}
      </Button>
    </Card>
  )
}
