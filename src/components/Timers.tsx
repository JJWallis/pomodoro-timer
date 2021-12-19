import React, { FC, useState } from 'react'
import { TimersContainer } from '../containers/TimersContainer.styled'
import { useModalContext } from '../hooks/useModalContext'
import { useTimerContext } from '../hooks/useTimerContext'
import { TimerButton } from '../styles/Button.styled'

const Timers: FC = () => {
   const [active, setActive] = useState('pomodoro')
   const { state } = useModalContext()
   const { dispatch, endTimer } = useTimerContext()

   const handleClick = (desiredTimer: string) => {
      if (active !== desiredTimer) {
         setActive(desiredTimer)
         endTimer()
         dispatch({
            type: 'SET_INITIAL_TIMER_LENGTH',
            amount: state[desiredTimer as keyof typeof state],
         })
      }

      // updates timer prop with key (desiredTimer) everytime
      // pomodoroAmount only updated if desiredTimer is not pomodoro && timer prop was pomodoro (will be by default)
      // code order - update timer prop to new key after this
      // setting when returning (desiredTimer === 'pomodoro') - if pomodoroAmount prop is truthy (use that for dispatch amount)
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
