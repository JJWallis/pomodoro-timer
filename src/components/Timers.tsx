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

         prevTimer.current = {
            timer: desiredTimer,
            amount: prevAmount ? prevAmount : null,
         }
      }

      // amount only updated if desiredTimer is not pomodoro && timer prop was pomodoro (will be by default)
      // code order - update timer prop to new key after this
      // setting when returning (desiredTimer === 'pomodoro') - if amount prop is truthy (use that for dispatch amount)
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
