import React, { FC } from 'react'
import { ModalContainer } from '../containers/Container.styled'
import ModalHeader from './ModalHeader'

const Modal: FC = () => {
   return (
      <ModalContainer>
         <ModalHeader />
      </ModalContainer>
   )
}

export default Modal
