import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bgColor: mode('white', 'gray.900')(props),
      borderColor: mode('gray.200', 'gray.800')(props)
    }
  })
}

// #161a20

export const theme = extendTheme({
  colors: {
    gray: {
      800: '#23292E',
      900: '#161a20'
    },
    blue: {
      500: '#3B5BFD'
    }
  },
  styles,
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif'
  }
})
