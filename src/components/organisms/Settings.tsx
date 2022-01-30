import {
  Flex,
  Heading,
  Text,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const Settings = () => {
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
            Dark
          </MenuButton>
          <MenuList>
            <MenuItem>Dark</MenuItem>
            <MenuItem>Light</MenuItem>
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
            Portuguese - BR
          </MenuButton>
          <MenuList>
            <MenuItem>English</MenuItem>
            <MenuItem>Portuguese - BR</MenuItem>
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
            Standard
          </MenuButton>
          <MenuList>
            <MenuItem>Standard</MenuItem>
            <MenuItem>Metric</MenuItem>
            <MenuItem>Imperial</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}
