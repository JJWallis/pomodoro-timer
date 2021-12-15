import React, { FC } from 'react'
import ModalSection from './ModalSection'
import ModalTimer from './ModalTimer'
import { withModalContext } from '../context/modalContext'
import { useModalContext } from '../hooks/useModalContext'

const ModalTimers: FC = () => {
   const { state, updateState } = useModalContext()

   const produceTimerInputs = () => {
      return Object.keys(state).map((key) => (
         <ModalTimer
            key={key}
            label={key}
            val={state[key as keyof typeof state]}
            updateState={updateState}
         />
      ))
   }

   return (
      <ModalSection heading="Time (MINUTES)">
         {produceTimerInputs()}
      </ModalSection>
   )
}

export default withModalContext(ModalTimers)
