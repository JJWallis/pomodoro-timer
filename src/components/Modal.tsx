import React, { FC } from 'react'
import { ModalContainer } from '../containers/Container.styled'
import ModalHeader from './ModalHeader'
import ModalTimers from './ModalTimers'
import ModalColors from './ModalColors'
import ModalFonts from './ModalFonts'
import { ApplyButton } from '../styles/Button.styled'
import { handleChange } from '../hooks/useToggle'

interface Props {
   isToggled: boolean
   handleChange: handleChange
}

const Modal: FC<Props> = ({ isToggled, handleChange }) => {
   return (
      <ModalContainer opacity={isToggled ? 0 : 1}>
         <ModalHeader toggle={handleChange} />
         <ModalTimers />
         <ModalFonts />
         <ModalColors />
         <ApplyButton type="button">Apply</ApplyButton>
      </ModalContainer>
   )
}

export default Modal
