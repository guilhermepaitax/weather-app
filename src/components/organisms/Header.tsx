import { useCallback } from 'react'
import {
  Flex,
  Container,
  Text,
  HStack,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from '../../hooks/redux'
import { openModal } from '../../store/modal/modalSlice'

import { IconButton } from '../atoms/IconButton'
import { Search } from './Search'
import { Settings } from './Settings'

export const Header = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('gray.100', 'whiteAlpha.50')

  const handleOpenSettings = useCallback(() => {
    dispatch(
      openModal({
        children: <Settings />,
        modalProps: {
          closeButton: true,
          size: 'xl'
        }
      })
    )
  }, [])

  const handleOpenSearch = useCallback(() => {
    dispatch(
      openModal({
        children: <Search />,
        modalProps: {
          size: 'lg'
        }
      })
    )
  }, [])

  return (
    <Flex
      as="header"
      h={16}
      borderBottom="1px"
      borderBottomColor={colorMode === 'dark' ? 'gray.800' : 'gray.200'}
    >
      <Container
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
      >
        <Text fontWeight={600}>{t('Weather Forecast')}</Text>
        <Button
          w={300}
          bg={bg}
          fontWeight="normal"
          onClick={handleOpenSearch}
          color={colorMode === 'dark' ? 'gray.300' : 'gray.400'}
          display={{
            md: 'inherit',
            base: 'none'
          }}
        >
          {t('Search for a location')}
        </Button>

        <HStack
          spacing={{
            md: 4,
            base: 2
          }}
        >
          <IconButton
            iconElement={FaSearch}
            aria-label={t('Search for a location')}
            onClick={handleOpenSearch}
            display={{
              md: 'none',
              base: 'inherit'
            }}
          />
          <IconButton
            iconElement={colorMode === 'dark' ? FaMoon : FaSun}
            aria-label={t('Change color mode')}
            onClick={toggleColorMode}
          />
          <IconButton
            iconElement={MdSettings}
            aria-label={t('Open settings')}
            onClick={handleOpenSettings}
          />
        </HStack>
      </Container>
    </Flex>
  )
}
