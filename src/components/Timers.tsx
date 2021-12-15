import React, { FC } from 'react'
import { TimersContainer } from '../containers/TimersContainer.styled'
import { TimerButton } from '../styles/Button.styled'

const Timers: FC = () => {
   return (
      <TimersContainer>
         <TimerButton active>pomodoro</TimerButton>
         <TimerButton>short break</TimerButton>
         <TimerButton>long break</TimerButton>
      </TimersContainer>
   )
}

export default Timers
