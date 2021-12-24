import React, { FC, useState } from 'react'
import { TimersContainer } from '../containers/TimersContainer.styled'
import { useModalContext } from '../hooks/useModalContext'
import { useTimerContext } from '../hooks/useTimerContext'
import { TimerButton } from '../styles/Button.styled'

const Timers: FC = () => {
   const [active, setActive] = useState('pomodoro')
   const { state } = useModalContext()
   const { dispatch, endTimer, currentTimerTotal } = useTimerContext()

   // TODO:
   // lift active state into useTimer
   // use in Modal to determine whether pomodoro is active state
   // then update timerLength on apply btn click

   const handleClick = (desiredTimer: string) => {
      if (active !== desiredTimer) {
         const newAmount = state[desiredTimer as keyof typeof state]
         setActive(desiredTimer)
         endTimer()
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
               active={key === active}
               onClick={() => handleClick(key)}
            >
               {key}
            </TimerButton>
         ))}
      </TimersContainer>
   )
}

export default Timers
