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
      // ref logic - updating prevRunningTimer holding obj - timer + pomodoroAmount props
      // updates timer prop with key (desiredTimer) everytime
      // pomodoroAmount only updated if desiredTimer is not pomodoro + timer prop was pomodoro (will be by default)
      // code order - update timer prop to new key after this
      // setting when returning - if pomodoroAmount prop is truthy + desiredTimer === 'pomodoro'
      // resetting ref? - if click pomodoro btn while main timer running will reset it
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
