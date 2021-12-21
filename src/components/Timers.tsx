import React, { FC, useState } from 'react'
import { TimersContainer } from '../containers/TimersContainer.styled'
import { useModalContext } from '../hooks/useModalContext'
import { useTimerContext } from '../hooks/useTimerContext'
import { TimerButton } from '../styles/Button.styled'

const Timers: FC = () => {
   const [active, setActive] = useState('pomodoro')
   const { state } = useModalContext()
   const { dispatch, endTimer, prevTimer, timerLength, currentTimerTotal } =
      useTimerContext()

   const gatherData = (desiredTimer: string) => {
      const {
         current: { timer, amount },
      } = prevTimer
      const prevAmount =
         desiredTimer !== 'pomodoro' && timer === 'pomodoro'
            ? timerLength
            : null
      const retrievePrevAmount = desiredTimer === 'pomodoro' ? amount : null
      const newAmount = retrievePrevAmount
         ? retrievePrevAmount
         : state[desiredTimer as keyof typeof state]
      return { prevAmount, newAmount }
   }

   const handleClick = (desiredTimer: string) => {
      if (active !== desiredTimer) {
         const { prevAmount, newAmount } = gatherData(desiredTimer)
         setActive(desiredTimer)
         endTimer()
         dispatch({
            type: 'SET_INITIAL_TIMER_LENGTH',
            amount: newAmount,
         })
         currentTimerTotal.current = newAmount
         prevTimer.current.timer = desiredTimer
         if (prevAmount) prevTimer.current.amount = prevAmount
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
