import { useCallback } from 'react'
import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalCloseButton
} from '@chakra-ui/react'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { closeModal } from '../../store/modal/modalSlice'

export const Modal = () => {
  const dispatch = useAppDispatch()
  const { modalProps, children, isOpen } = useAppSelector(state => state.modal)

  const handleClose = useCallback(() => {
    dispatch(closeModal())
  }, [dispatch])

  return (
    <ModalChakra {...modalProps} isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        {modalProps?.closeButton && <ModalCloseButton />}
        {children}
      </ModalContent>
    </ModalChakra>
  )
}
