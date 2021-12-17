import React, { FC } from 'react'
import { ClockButton } from '../styles/Button.styled'
import { TimerTitle } from '../styles/Title.styled'
import ProgressBar from './ProgressBar'

interface Props {
   timerLength: number
   isRunning: boolean
   startTimer: () => void
   endTimer: () => void
}

const Clock: FC<Props> = ({ timerLength, isRunning, startTimer, endTimer }) => {
   return (
      <ClockButton onClick={isRunning ? endTimer : startTimer}>
         <TimerTitle>{timerLength}</TimerTitle>
         <TimerTitle subTitle>{isRunning ? 'pause' : 'play'}</TimerTitle>
         <ProgressBar />
      </ClockButton>
   )
}

export default Clock
