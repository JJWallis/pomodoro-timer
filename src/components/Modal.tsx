import React, { FC } from 'react'
import { ModalContainer } from '../containers/Container.styled'
import ModalHeader from './ModalHeader'
import ModalTimers from './ModalTimers'
import ModalColors from './ModalColors'
import ModalFonts from './ModalFonts'
import { ApplyButton } from '../styles/Button.styled'
import { handleChange } from '../hooks/useToggle'

interface Props {
   isModalToggled: boolean
   setIsModalToggled: handleChange
}

const Modal: FC<Props> = ({ isModalToggled, setIsModalToggled }) => {
   return (
      <ModalContainer opacity={isModalToggled ? 1 : 0}>
         <ModalHeader setIsModalToggled={setIsModalToggled} />
         <ModalTimers />
         <ModalFonts />
         <ModalColors />
         <ApplyButton type="button" onClick={setIsModalToggled}>
            Apply
         </ApplyButton>
      </ModalContainer>
   )
}

export default Modal
