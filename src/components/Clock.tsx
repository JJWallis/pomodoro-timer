import React, { FC } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { ClockButton } from '../styles/Button.styled'
import { TimerTitle } from '../styles/Title.styled'
import ProgressBar from './ProgressBar'

const Clock: FC = () => {
   const { timerLength, isRunning, endTimer, startTimer } = useTimerContext()

   return (
      <ClockButton onClick={isRunning ? endTimer : startTimer}>
         <TimerTitle>{timerLength}</TimerTitle>
         <TimerTitle subTitle>
            {isRunning && timerLength !== 0 ? 'pause' : 'play'}
         </TimerTitle>
         <ProgressBar />
      </ClockButton>
   )
}

export default Clock
