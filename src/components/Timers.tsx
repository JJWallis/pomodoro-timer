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
      setActive(desiredTimer)
      endTimer()
      // ref logic - updating prevRunningTimer holding obj - timer + amount props
      // updates timer prop with key everytime
      // amount only updated if desiredTimer is not pomodoro + timer prop was pomodoro
      // code order - update timer prop to new key after this
      // setting when returning - if amount prop is truthy + desiredTimer === 'pomodoro'
      // resetting ref? - if click pomodoro btn while main timer running will reset it
      dispatch({
         type: 'SET_INITIAL_TIMER_LENGTH',
         amount: state[desiredTimer as keyof typeof state],
      })
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
