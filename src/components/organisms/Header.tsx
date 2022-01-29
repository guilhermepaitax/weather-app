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

import { useAppDispatch } from '../../hooks/redux'
import { openModal } from '../../store/modal/modalSlice'

import { IconButton } from '../atoms/IconButton'
import { Search } from './Search'

export const Header = () => {
  const dispatch = useAppDispatch()
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('gray.100', 'whiteAlpha.50')

  const handleOpenSettings = useCallback(() => {
    dispatch(
      openModal({
        children: <div>Settings</div>,
        modalProps: {
          isCentered: true
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
        <Text fontWeight={600}>Weather Forecast</Text>
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
          Search for a location
        </Button>

        <HStack
          spacing={{
            md: 4,
            base: 2
          }}
        >
          <IconButton
            iconElement={FaSearch}
            aria-label="Serach for a location"
            onClick={handleOpenSearch}
            display={{
              md: 'none',
              base: 'inherit'
            }}
          />
          <IconButton
            iconElement={colorMode === 'dark' ? FaMoon : FaSun}
            aria-label="Change color mode"
            onClick={toggleColorMode}
          />
          <IconButton
            iconElement={MdSettings}
            aria-label="Open settings"
            onClick={handleOpenSettings}
          />
        </HStack>
      </Container>
    </Flex>
  )
}
