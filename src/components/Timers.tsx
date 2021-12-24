import React, { FC } from 'react'
import { TimersContainer } from '../containers/TimersContainer.styled'
import { useModalContext } from '../hooks/useModalContext'
import { useTimerContext } from '../hooks/useTimerContext'
import { TimerButton } from '../styles/Button.styled'

const Timers: FC = () => {
   const { state } = useModalContext()
   const { dispatch, endTimer, currentTimerTotal, activeTimer } =
      useTimerContext()

   const handleClick = (desiredTimer: string) => {
      if (activeTimer !== desiredTimer) {
         const newAmount = state[desiredTimer as keyof typeof state]
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
      <TimersContainer>
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
