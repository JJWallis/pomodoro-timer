import React, { FC } from 'react'
import ModalSection from './ModalSection'
import ModalTimer from './ModalTimer'
import { withModalContext } from '../context/modalContext'
import { useModalContext } from '../hooks/useModalContext'

const ModalTimers: FC = () => {
   const { state, updateState } = useModalContext()

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

export default withModalContext(ModalTimers)
