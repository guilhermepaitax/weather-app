import {
  IconButton as IconButtonChakra,
  IconButtonProps as IconButtonPropsChakra,
  Tooltip,
  Icon,
  IconProps
} from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface IconButtonProps extends IconButtonPropsChakra {
  iconElement: IconType
  onClick?: () => void
  tooltipLabel?: string
  tooltipDisabled?: boolean
  tooltipOpenDelay?: number
  iconProps?: IconProps
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconElement,
  'aria-label': ariaLabel,
  tooltipLabel,
  onClick,
  tooltipDisabled = false,
  tooltipOpenDelay = 400,
  iconProps,
  ...props
}) => {
  return (
    <Tooltip
      label={tooltipLabel || ariaLabel}
      isDisabled={tooltipDisabled}
      openDelay={tooltipOpenDelay}
    >
      <IconButtonChakra
        onClick={onClick}
        aria-label={ariaLabel}
        icon={<Icon as={iconElement} {...iconProps} />}
        {...props}
      />
    </Tooltip>
  )
}
