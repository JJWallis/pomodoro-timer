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

   const formatTimer = (leftSeconds: number) => {
      const seconds = leftSeconds % 60
      const minutes = Math.floor(leftSeconds / 60)
      const minutesString = minutes > 9 ? minutes : `0${minutes}`
      const secondsString = seconds > 9 ? seconds : `0${seconds}`
      return `${minutesString}:${secondsString}`
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
