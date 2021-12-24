import React, { FC, useLayoutEffect, useCallback, useRef } from 'react'
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
   const { dispatch, currentTimerTotal, endTimer, activeTimer } =
      useTimerContext()
   const {
      state: { pomodoro },
   } = useModalContext()
   let updateTimerOnMount = useRef(true)

   const setNewTimer = useCallback(() => {
      dispatch({
         type: 'SET_INITIAL_TIMER_LENGTH',
         amount: pomodoro * 60,
      })
      currentTimerTotal.current = pomodoro
   }, [currentTimerTotal, dispatch, pomodoro])

   useLayoutEffect(() => {
      if (updateTimerOnMount.current) {
         setNewTimer()
         updateTimerOnMount.current = false
      }
   }, [currentTimerTotal, pomodoro, dispatch, setNewTimer, updateTimerOnMount])

   // determine what is active state
   // then update timerLength with it on apply btn click

   return (
      <ModalContainer opacity={isModalToggled ? 1 : 0}>
         <ModalHeader setIsModalToggled={setIsModalToggled} />
         <ModalTimers />
         <ModalFonts />
         <ModalColors />
         <ApplyButton type="button" onClick={endTimer}>
            Apply
         </ApplyButton>
      </ModalContainer>
   )
}

export default Modal
