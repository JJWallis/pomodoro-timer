import React, { FC } from 'react'
import { ModalContainer } from '../containers/Container.styled'
import ModalHeader from './ModalHeader'
import ModalTimers from './ModalTimers'
import ModalColors from './ModalColors'
import { withToggler, toggle, isToggled } from './withToggler'
import { withUserTest, useUserTest } from '../context/userTest'

interface Props {
   toggle: toggle
   isToggled: isToggled
}

const Modal: FC<Props> = ({ toggle, isToggled }) => {
   const { test } = useUserTest()
   return (
      <ModalContainer opacity={isToggled ? 0 : 1}>
         <ModalHeader toggle={toggle} />
         <ModalTimers />
         <ModalColors />
      </ModalContainer>
   )
}

export default withUserTest(withToggler(Modal, { initialState: false }))
