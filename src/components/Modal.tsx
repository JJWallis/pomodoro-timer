import React, { FC } from 'react'
import { ModalContainer } from '../containers/Container.styled'
import ModalHeader from './ModalHeader'
import ModalTimers from './ModalTimers'
import ModalColors from './ModalColors'
import ModalFonts from './ModalFonts'
import { withToggler, toggle, isToggled } from './withToggler'
import { ApplyButton } from '../styles/Button.styled'

interface Props {
   toggle: toggle
   isToggled: isToggled
}

const Modal: FC<Props> = ({ toggle, isToggled }) => {
   return (
      <ModalContainer opacity={isToggled ? 0 : 1}>
         <form>
            <ModalHeader toggle={toggle} />
            <ModalTimers />
            <ModalFonts />
            <ModalColors />
            <ApplyButton>Apply</ApplyButton>
         </form>
         /
      </ModalContainer>
   )
}

export default withToggler(Modal, { initialState: false })
