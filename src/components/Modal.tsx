import React, { FC } from 'react'
import { ModalContainer } from '../containers/Container.styled'
import ModalHeader from './ModalHeader'
import { withToggler } from './withToggler'

interface Props {
   toggle: () => void
   isToggled: boolean
}

const Modal: FC<Props> = ({ toggle, isToggled }) => {
   return (
      <ModalContainer opacity={isToggled ? 0 : 1}>
         <ModalHeader toggle={toggle} />
      </ModalContainer>
   )
}

export default withToggler(Modal)
