import React, { FC, useState } from 'react'
import { TimersContainer } from '../containers/TimersContainer.styled'
import { useModalContext } from '../hooks/useModalContext'
import { useTimerContext } from '../hooks/useTimerContext'
import { TimerButton } from '../styles/Button.styled'

const Timers: FC = () => {
   const [active, setActive] = useState('pomodoro')
   const { state } = useModalContext()
   const { dispatch, endTimer, prevTimer, timerLength } = useTimerContext()

   const handleClick = (desiredTimer: string) => {
      if (active !== desiredTimer) {
         const {
            current: { timer, amount },
         } = prevTimer
         const prevAmount =
            desiredTimer !== 'pomodoro' && timer === 'pomodoro'
               ? timerLength
               : null
         const retrievePrevAmount = desiredTimer === 'pomodoro' ? amount : null

         setActive(desiredTimer)
         endTimer()
         dispatch({
            type: 'SET_INITIAL_TIMER_LENGTH',
            amount: retrievePrevAmount
               ? retrievePrevAmount
               : state[desiredTimer as keyof typeof state],
         })

         prevTimer.current.timer = desiredTimer
         if (prevAmount) prevTimer.current.amount = prevAmount
      }

      // BUG - update timerLength from modal display but ref still holds a value?
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
