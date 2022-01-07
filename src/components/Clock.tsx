import React, { FC, useEffect, useState } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { useModalContext } from '../hooks/useModalContext'
import { ClockContainer } from '../containers/ClockContainer'
import { ClockButton } from '../styles/Button.styled'
import { ProgressCircle } from '../styles/Icon.styled'
import { TimerTitle } from '../styles/Title.styled'
import { ResetButton } from '../styles/Button.styled'

const Clock: FC = () => {
   const [progressWidth, setProgressWidth] = useState(0)
   const {
      timerLength,
      isRunning,
      endTimer,
      startTimer,
      currentTimerTotal,
      setNewTimer,
   } = useTimerContext()
   const { state } = useModalContext()

   useEffect(() => {
      const current = currentTimerTotal.current
         ? currentTimerTotal.current
         : state.pomodoro
      setProgressWidth((timerLength / 60 / current) * 500)
   }, [timerLength, currentTimerTotal, state])

   const handleResetBtn = () => {
      endTimer()
      setNewTimer(state)
   }

   const formatTimer = (secondsRemaining: number) => {
      const seconds = secondsRemaining % 60
      const minutes = Math.floor(secondsRemaining / 60)
      return [minutes, seconds]
         .map((time) => (time > 9 ? time : `0${time}`))
         .join(':')
   }

   return (
      <ClockContainer as="section">
         <ClockButton
            progressAmount={progressWidth}
            onClick={isRunning ? endTimer : startTimer}
         >
            <ProgressCircle
               progressAmount={progressWidth}
               viewBox="0 0 168 168"
               aria-hidden="true"
               focusable="false"
            >
               <path
                  d="M84 4.4225
      a 79.5775 79.5775 0 0 1 0 159.155
      a 79.5775 79.5775 0 0 1 0 -159.155"
               />
            </ProgressCircle>
            <TimerTitle>{formatTimer(timerLength)}</TimerTitle>
            <TimerTitle as="p" subTitle progressAmount={progressWidth}>
               {isRunning && timerLength !== 0 ? 'pause' : 'start'}
            </TimerTitle>
         </ClockButton>
         <ResetButton progressAmount={progressWidth} onClick={handleResetBtn}>
            Reset
         </ResetButton>
      </ClockContainer>
   )
}

export default Clock
