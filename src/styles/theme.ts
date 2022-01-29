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

export const theme = extendTheme({
  colors: {
    gray: {
      200: '#F4F8FB',
      800: '#23292E',
      900: '#161a20'
    },
    blue: {
      500: '#3B5BFD'
    }
  },
  shadows: {
    outline: '0 0 0 3px rgba(98, 93, 245, 0.5)'
  },
  styles,
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif'
  }
})
