import React, { FC } from 'react'
import { ClockButton } from '../styles/Button.styled'
import { TimerTitle } from '../styles/Title.styled'

const Clock: FC = () => {
   return (
      <ClockButton>
         <TimerTitle>0:00</TimerTitle>
         <TimerTitle subTitle>pause</TimerTitle>
      </ClockButton>
   )
}

export default Clock
