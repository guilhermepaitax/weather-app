import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Routes } from './routes'

import { store } from './store'
import { theme } from './styles/theme'

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Routes />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  )
}
