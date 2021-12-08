import React, { FC } from 'react'
import ModalSection from './ModalSection'
import ModalTimer from './ModalTimer'
import { useRender } from '../hooks/useRender'

const ModalTimers: FC = () => {
   useRender()
   const produceTimerInputs = () => {
      const labels = ['pomodoro', 'short-break', 'long-break']
      return labels.map((label) => <ModalTimer key={label} label={label} />)
   }

   return (
      <ModalSection heading="Time (MINUTES)">
         {produceTimerInputs()}
      </ModalSection>
   )
}

export default ModalTimers
