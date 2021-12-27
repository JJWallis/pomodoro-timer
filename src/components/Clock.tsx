import React, { FC, useEffect, useState } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { ClockButton } from '../styles/Button.styled'
import { TimerTitle } from '../styles/Title.styled'
import { ProgressCircle } from '../styles/Icon.styled'
import { useModalContext } from '../hooks/useModalContext'
import { ResetButton } from '../styles/Button.styled'
import { ClockContainer } from '../containers/Container.styled'

const Clock: FC = () => {
   const [progressWidth, setProgressWidth] = useState(0)
   const {
      timerLength,
      isRunning,
      endTimer,
      startTimer,
      currentTimerTotal,
      formatTimer,
      activeTimer,
      dispatch,
   } = useTimerContext()
   const { state } = useModalContext()

   useEffect(() => {
      const current = currentTimerTotal.current
         ? currentTimerTotal.current
         : state.pomodoro
      setProgressWidth((timerLength / 60 / current) * 500)
   }, [timerLength, currentTimerTotal, state])

   const setNewTimer = () => {
      const desiredAmount = state[activeTimer as keyof typeof state]
      dispatch({
         type: 'SET_INITIAL_TIMER_LENGTH',
         amount: desiredAmount * 60,
      })
      currentTimerTotal.current = desiredAmount
   }

   const handleApplyBtn = () => {
      endTimer()
      setNewTimer()
   }

   return (
      <ClockContainer>
         <ClockButton
            progressAmount={progressWidth}
            onClick={isRunning ? endTimer : startTimer}
         >
            <ProgressCircle
               progressAmount={progressWidth}
               viewBox="0 0 168 168"
            >
               <path
                  d="M84 4.4225
      a 79.5775 79.5775 0 0 1 0 159.155
      a 79.5775 79.5775 0 0 1 0 -159.155"
               />
            </ProgressCircle>
            <TimerTitle>{formatTimer(timerLength)}</TimerTitle>
            <TimerTitle subTitle>
               {isRunning && timerLength !== 0 ? 'pause' : 'start'}
            </TimerTitle>
         </ClockButton>
         <ResetButton
            resetVisible={isRunning || timerLength === 0}
            onClick={handleApplyBtn}
         >
            Reset
         </ResetButton>
      </ClockContainer>
   )
}

export default Clock
