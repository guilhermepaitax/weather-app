import {
  Flex,
  Heading,
  Text,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setLang, setUnits } from '../../store/settings/settingsSlice'
import { getWeather } from '../../store/weather/weatherSlice'

export const Settings = () => {
  const dispatch = useAppDispatch()
  const { colorMode, setColorMode } = useColorMode()
  const { lang, units } = useAppSelector(state => state.settings)
  const { weather } = useAppSelector(state => state.weather)

  const handleUpdateWeather = () => {
    dispatch(getWeather({ id: weather?.id }))
  }

  const handleChangeTheme = (theme: string) => {
    setColorMode(theme)
  }

  const handleChangeLang = async (lang: string) => {
    await dispatch(setLang(lang))
    handleUpdateWeather()
  }

  const handleChangeUnits = async (units: string) => {
    await dispatch(setUnits(units))
    handleUpdateWeather()
  }

  return (
    <Flex pt={10} pb={16} px={8} flexDirection="column">
      <Heading fontSize={28}>Settings</Heading>

      <Flex
        flexDirection={{
          base: 'column',
          md: 'row'
        }}
        align={{
          base: 'flex-start',
          md: 'center'
        }}
        mt={10}
      >
        <Text mr={[0, 4]} mb={[4, 4, 0]} fontSize={18} fontWeight="500">
          Application Theme
        </Text>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {colorMode}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleChangeTheme('dark')}>Dark</MenuItem>
            <MenuItem onClick={() => handleChangeTheme('light')}>
              Light
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex
        flexDirection={{
          base: 'column',
          md: 'row'
        }}
        align={{
          base: 'flex-start',
          md: 'center'
        }}
        mt={10}
      >
        <Text mr={[0, 4]} mb={[4, 4, 0]} fontSize={18} fontWeight="500">
          Application Language
        </Text>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {lang}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleChangeLang('en')}>en</MenuItem>
            <MenuItem onClick={() => handleChangeLang('pt_br')}>pt_br</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex
        flexDirection={{
          base: 'column',
          md: 'row'
        }}
        align={{
          base: 'flex-start',
          md: 'center'
        }}
        mt={10}
      >
        <Text mr={[0, 4]} mb={[4, 4, 0]} fontSize={18} fontWeight="500">
          Application Units
        </Text>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {units}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleChangeUnits('standard')}>
              standard
            </MenuItem>
            <MenuItem onClick={() => handleChangeUnits('metric')}>
              metric
            </MenuItem>
            <MenuItem onClick={() => handleChangeUnits('imperial')}>
              imperial
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}
