import React, { FC, useState } from 'react'
import { TimersContainer } from '../containers/TimersContainer.styled'
import { useModalContext } from '../hooks/useModalContext'
import { TimerButton } from '../styles/Button.styled'

// type TimerStates = 'shortbreak' | 'longbreak' | 'pomodoro'

const Timers: FC = () => {
   const [active, setActive] = useState('pomodoro')
   const { state } = useModalContext()

   const handleClick = (type: string) => {
      setActive(type)
      // dispatch
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
