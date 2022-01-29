import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IModal, IOpenModal } from './types'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    children: null,
    modalProps: {}
  } as IModal,
  reducers: {
    openModal: (state, action: PayloadAction<IOpenModal>) => {
      state.isOpen = true
      state.children = action.payload.children
      state.modalProps = action.payload.modalProps
    },
    closeModal: state => {
      state.isOpen = false
      state.children = null
    }
  },
  extraReducers: {}
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
