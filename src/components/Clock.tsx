import React, { FC } from 'react'
import { ClockButton } from '../styles/Button.styled'
import { TimerTitle } from '../styles/Title.styled'
import ProgressBar from './ProgressBar'

const Clock: FC = () => {
   return (
      <ClockButton>
         <TimerTitle>0:00</TimerTitle>
         <TimerTitle subTitle>play</TimerTitle>
         <ProgressBar />
      </ClockButton>
   )
}

export default Clock
