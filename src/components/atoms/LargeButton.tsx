import { Button, ButtonProps } from '@chakra-ui/react'

export const LargeButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      py={8}
      w="100%"
      size="lg"
      rounded="lg"
      fontSize={16}
      fontWeight="500"
      justifyContent="flex-start"
      {...props}
    >
      {children}
    </Button>
  )
}
