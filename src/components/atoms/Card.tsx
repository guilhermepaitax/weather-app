import { Flex, useColorModeValue, FlexProps } from '@chakra-ui/react'

export const Card: React.FC<FlexProps> = ({ children, ...props }) => {
  const bg = useColorModeValue('gray.200', 'whiteAlpha.50')

  return (
    <Flex
      bg={bg}
      py={10}
      px={12}
      borderRadius={10}
      position="relative"
      {...props}
    >
      {children}
    </Flex>
  )
}
