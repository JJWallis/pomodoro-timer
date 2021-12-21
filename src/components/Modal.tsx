import React, { FC, useLayoutEffect } from 'react'
import { ModalContainer } from '../containers/Container.styled'
import ModalHeader from './ModalHeader'
import ModalTimers from './ModalTimers'
import ModalColors from './ModalColors'
import ModalFonts from './ModalFonts'
import { ApplyButton } from '../styles/Button.styled'
import { handleChange } from '../hooks/useToggle'
import { useTimerContext } from '../hooks/useTimerContext'
import { useModalContext } from '../hooks/useModalContext'

interface Props {
   isModalToggled: boolean
   setIsModalToggled: handleChange
}

const Modal: FC<Props> = ({ isModalToggled, setIsModalToggled }) => {
   const { dispatch, currentTimerTotal, endTimer } = useTimerContext()
   const {
      state: { pomodoro },
   } = useModalContext()

   const setNewTimer = () => {
      dispatch({
         type: 'SET_INITIAL_TIMER_LENGTH',
         amount: pomodoro,
      })
      currentTimerTotal.current = pomodoro
   }

   const handleApplyBtn = () => {
      setNewTimer()
      endTimer()
   }

   useLayoutEffect(setNewTimer, [])

   return (
      <ModalContainer opacity={isModalToggled ? 1 : 0}>
         <ModalHeader setIsModalToggled={setIsModalToggled} />
         <ModalTimers />
         <ModalFonts />
         <ModalColors />
         <ApplyButton type="button" onClick={handleApplyBtn}>
            Apply
         </ApplyButton>
      </ModalContainer>
   )
}

export default Modal
