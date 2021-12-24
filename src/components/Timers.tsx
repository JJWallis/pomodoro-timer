import React, { FC, useState } from 'react'
import { TimersContainer } from '../containers/TimersContainer.styled'
import { useModalContext } from '../hooks/useModalContext'
import { useTimerContext } from '../hooks/useTimerContext'
import { TimerButton } from '../styles/Button.styled'

const Timers: FC = () => {
   // const [active, setActive] = useState('pomodoro')
   const { state } = useModalContext()
   const { dispatch, endTimer, currentTimerTotal, activeTimer } =
      useTimerContext()

   // TODO:
   // use in Modal to determine what is active state
   // then update timerLength with it on apply btn click
   // blend dispatch into setInitialTimerLength
   // refactor isRunning using that state

   const handleClick = (desiredTimer: string) => {
      if (activeTimer !== desiredTimer) {
         const newAmount = state[desiredTimer as keyof typeof state]
         endTimer()
         // setActive(desiredTimer)
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
