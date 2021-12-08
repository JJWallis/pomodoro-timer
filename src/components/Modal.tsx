import React, { FC } from 'react'
import { ModalContainer } from '../containers/Container.styled'
import ModalHeader from './ModalHeader'
import ModalTimers from './ModalTimers'
import ModalColors from './ModalColors'
import { withToggler, toggle, isToggled } from './withToggler'

interface Props {
   toggle: toggle
   isToggled: isToggled
}

const Modal: FC<Props> = ({ toggle, isToggled }) => {
   return (
      <ModalContainer opacity={isToggled ? 0 : 1}>
         <ModalHeader toggle={toggle} />
         <ModalTimers />
         <ModalColors />
      </ModalContainer>
   )
}

export default withToggler(Modal, { initialState: false })
