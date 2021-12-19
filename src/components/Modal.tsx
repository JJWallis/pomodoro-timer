import React, { FC } from 'react'
import { ModalContainer } from '../containers/Container.styled'
import ModalHeader from './ModalHeader'
import ModalTimers from './ModalTimers'
import ModalColors from './ModalColors'
import ModalFonts from './ModalFonts'
import { ApplyButton } from '../styles/Button.styled'
import { handleChange } from '../hooks/useToggle'
import { useTimerContext } from '../hooks/useTimerContext'
import { useModalContext } from '../hooks/useModalContext'
import { withModalContext } from '../context/modalContext'

interface Props {
   isModalToggled: boolean
   setIsModalToggled: handleChange
}

const Modal: FC<Props> = ({ isModalToggled, setIsModalToggled }) => {
   const { dispatch } = useTimerContext()
   const { state } = useModalContext()

   return (
      <ModalContainer opacity={isModalToggled ? 1 : 0}>
         <ModalHeader setIsModalToggled={setIsModalToggled} />
         <ModalTimers />
         <ModalFonts />
         <ModalColors />
         <ApplyButton
            type="button"
            onClick={() =>
               dispatch({
                  type: 'SET_INITIAL_TIMER_LENGTH',
                  amount: state.pomodoro,
               })
            }
         >
            Apply
         </ApplyButton>
      </ModalContainer>
   )
}

export default withModalContext(Modal)
