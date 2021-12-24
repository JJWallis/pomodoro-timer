import React, { FC, useEffect, useState } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { ClockButton } from '../styles/Button.styled'
import { TimerTitle } from '../styles/Title.styled'
import { ProgressCircle } from '../styles/Icon.styled'
import { useModalContext } from '../hooks/useModalContext'

const Clock: FC = () => {
   const [progressWidth, setProgressWidth] = useState(0)
   const {
      timerLength,
      isRunning,
      endTimer,
      startTimer,
      currentTimerTotal: { current: currentTotal },
      formatTimer,
      formatTimerHourBase,
   } = useTimerContext()
   const {
      state: { pomodoro },
   } = useModalContext()

   useEffect(() => {
      const current = currentTotal ? currentTotal : pomodoro
      setProgressWidth((timerLength / 60 / current) * 500)
   }, [timerLength, currentTotal, pomodoro])

   return (
      <>
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
            <TimerTitle>
               {currentTotal && currentTotal > 60
                  ? formatTimerHourBase(timerLength)
                  : formatTimer(timerLength)}
            </TimerTitle>
            <TimerTitle subTitle>
               {isRunning && timerLength !== 0 ? 'pause' : 'play'}
            </TimerTitle>
         </ClockButton>
      </>
   )
}

export default Clock
