import { useCallback } from 'react'
import { Text, Button } from '@chakra-ui/react'
import { Card } from '../atoms/Card'

import { useAppDispatch } from '../../hooks/redux'
import { openModal } from '../../store/modal/modalSlice'

import imgNightStorm from '../../assets/img/6.png'

import { Search } from '../organisms/Search'

export const NoDataCard = () => {
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
      bg="green.700"
      p={{
        md: 10,
        base: 6
      }}
      bgImage={`url(${imgNightStorm})`}
      backgroundSize={{
        md: '55%',
        base: '120%'
      }}
      flexDirection="column"
      backgroundRepeat="no-repeat"
      backgroundPosition={{
        md: '100% 50%',
        base: '-250%'
      }}
    >
      <Text
        color="yellow.400"
        fontSize={44}
        fontWeight="bold"
        lineHeight={1.15}
        maxW={480}
      >
        Search, for some place.
      </Text>
      <Button
        mt={6}
        py={6}
        maxW={260}
        onClick={handleSearch}
        fontWeight="500"
        bg="yellow.400"
        color="yellow.700"
        _hover={{ bg: 'yellow.600', color: 'yellow.800' }}
        _active={{ bg: 'yellow.700', color: 'yellow.800' }}
      >
        Click to search
      </Button>
    </Card>
  )
}
