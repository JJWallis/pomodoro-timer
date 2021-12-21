import React, { FC, useEffect, useState } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { ClockButton } from '../styles/Button.styled'
import { TimerTitle } from '../styles/Title.styled'
import { ProgressCircle } from '../styles/Icon.styled'

const Clock: FC = () => {
   const [progressWidth, setProgressWidth] = useState(0)
   const { timerLength, isRunning, endTimer, startTimer } = useTimerContext()

   useEffect(() => {
      // when timer changes (prevTimerRef.current.timer)
      // use to determine whether to reset progress bar to 0 (or use prevTimerRef.current.amount)
      // growing issue - always setting width + 1 below (when changing timer) every render
      // wamt to set progressWidth to 0 if change timer as well (not just === 0)
      // defaults to zero - issue?

      setProgressWidth(((timerLength / 10) * 100) / 10)
      if (timerLength === 0) setProgressWidth(0)
   }, [timerLength])

   return (
      <>
         <ClockButton
            progressAmount={progressWidth}
            onClick={isRunning ? endTimer : startTimer}
         >
            <ProgressCircle>
               <path
                  d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
               />
            </ProgressCircle>
            <TimerTitle>{timerLength}</TimerTitle>
            <TimerTitle subTitle>
               {isRunning && timerLength !== 0 ? 'pause' : 'play'}
            </TimerTitle>
         </ClockButton>
      </>
   )
}

export default Clock
