import React, { FC, useEffect, useState } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { ClockButton } from '../styles/Button.styled'
import { TimerTitle } from '../styles/Title.styled'

const Clock: FC = () => {
   const [progressWidth, setProgressWidth] = useState(0)
   const { timerLength, isRunning, endTimer, startTimer } = useTimerContext()

   useEffect(() => {
      // when timer changes (prevTimerRef.current.timer) - reset progress bar to 0
      // unless pomodoro - dynamic math
      setProgressWidth((prev) => prev + 1)
      if (timerLength === 0) setProgressWidth(0)
   }, [timerLength])

   return (
      <>
         <ClockButton
            progressAmount={progressWidth}
            onClick={isRunning ? endTimer : startTimer}
         >
            <TimerTitle>{timerLength}</TimerTitle>
            <TimerTitle subTitle>
               {isRunning && timerLength !== 0 ? 'pause' : 'play'}
            </TimerTitle>
         </ClockButton>
      </>
   )
}

export default Clock
