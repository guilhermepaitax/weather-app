interface IModalProps {
  isCentered?: boolean
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | 'full'
  closeButton?: boolean
}

export interface IModal {
  isOpen: boolean
  children: React.ReactNode
  modalProps?: IModalProps
}

export interface IOpenModal {
  children?: React.ReactNode
  modalProps?: IModalProps
}
