import React, { FC, useState } from 'react'
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
   const [count, setCount] = useState(0)
   const cb = () => console.log('Counter fired...')

   return (
      <ModalContainer opacity={isToggled ? 0 : 1}>
         <ModalHeader toggle={toggle} />
         <ModalTimers />
         <ModalColors />
         <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Increase
         </button>
         <div>{count}</div>
      </ModalContainer>
   )
}

export default withToggler(Modal, { initialState: false })
