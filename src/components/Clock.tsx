import React, { FC } from 'react'
import { ClockButton } from '../styles/Button.styled'
import { TimerTitle } from '../styles/Title.styled'
import ProgressBar from './ProgressBar'

interface Props {
   timerLength: string
}

const Clock: FC<Props> = ({ timerLength }) => {
   return (
      <ClockButton>
         <TimerTitle>{timerLength}</TimerTitle>
         <TimerTitle subTitle>play</TimerTitle>
         <ProgressBar />
      </ClockButton>
   )
}

export default Clock
