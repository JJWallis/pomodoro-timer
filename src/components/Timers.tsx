import React, { FC } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { useModalContext } from '../hooks/useModalContext'
import { TimersContainer } from '../containers/TimersContainer.styled'
import { TimerButton } from '../styles/Button.styled'
import { ModalStateKeys } from '../context/modalContext.interface'
import SrOnly from '../styles/SrOnly.styled'

const Timers: FC = () => {
   const modalState = useModalContext()
   const { dispatch, endTimer, currentTimerTotal, activeTimer } =
      useTimerContext()

   const handleClick = (desiredTimer: string) => {
      if (activeTimer !== desiredTimer) {
         const newAmount = modalState[desiredTimer as ModalStateKeys]
         endTimer()
         dispatch({ type: 'SET_ACTIVE_TIMER', active: desiredTimer })
         dispatch({
            type: 'SET_INITIAL_TIMER_LENGTH',
            amount: newAmount * 60,
         })
         currentTimerTotal.current = newAmount
      }
   }

   return (
      <TimersContainer as="section" aria-labelledby="timers-desc">
         <SrOnly id="timers-desc">Select desired active timer</SrOnly>
         {Object.keys(modalState).map((key) => (
            <TimerButton
               key={key}
               active={key === activeTimer}
               onClick={() => handleClick(key)}
            >
               {key}
            </TimerButton>
         ))}
      </TimersContainer>
   )
}

export default Timers
