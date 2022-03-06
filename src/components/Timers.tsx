import React, { FC } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { useModalContext } from '../hooks/useModalContext'
import { TimersContainer } from '../containers/TimersContainer.styled'
import { TimerButton } from '../styles/Button.styled'
import SrOnly from '../styles/SrOnly.styled'
import { ModalStateKeys } from '../context/modalContext.interface'

const Timers: FC = () => {
   const { state } = useModalContext()
   const { dispatch, endTimer, currentTimerTotal, activeTimer } =
      useTimerContext()

   const handleClick = (desiredTimer: string) => {
      if (activeTimer !== desiredTimer) {
         const newAmount = state[desiredTimer as ModalStateKeys]
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
      <TimersContainer as="section" aria-labelledby="timers-subtitle">
         <SrOnly id="timers-subtitle">Select desired active timer</SrOnly>
         {Object.keys(state).map((key) => (
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
