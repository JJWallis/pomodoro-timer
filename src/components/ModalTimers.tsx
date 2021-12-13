import React, { FC } from 'react'
import ModalSection from './ModalSection'
import ModalTimer from './ModalTimer'
import { useLocalStorage } from '../hooks/useLocalStorage'

const ModalTimers: FC = () => {
   const [time, setTime] = useLocalStorage('timer', '')

   const produceTimerInputs = () => {
      return ['pomodoro', 'short-break', 'long-break'].map((label) => (
         <ModalTimer key={label} label={label} />
      ))
   }

   return (
      <ModalSection heading="Time (MINUTES)">
         {produceTimerInputs()}
         <input value={time} onChange={(e) => setTime(e.target.value)} />
      </ModalSection>
   )
}

export default ModalTimers
