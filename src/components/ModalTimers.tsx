import React, { FC } from 'react'
import ModalSection from './ModalSection'
import ModalTimer from './ModalTimer'

const ModalTimers: FC = () => {
   const produceTimerInputs = () => {
      return ['pomodoro', 'short-break', 'long-break'].map((label) => (
         <ModalTimer key={label} label={label} />
      ))
   }

   return (
      <ModalSection heading="Time (MINUTES)">
         {produceTimerInputs()}
      </ModalSection>
   )
}

export default ModalTimers
