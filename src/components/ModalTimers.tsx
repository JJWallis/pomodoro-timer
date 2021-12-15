import React, { FC } from 'react'
import ModalSection from './ModalSection'
import ModalTimer from './ModalTimer'
import { withModalContext } from '../context/modalContext'
import { useModalContext } from '../hooks/useModalContext'

const ModalTimers: FC = () => {
   const { state, updateState } = useModalContext()

   const produceTimerInputs = () => {
      return Object.entries(state).map(([key], val) => (
         <ModalTimer
            key={key}
            label={key}
            val={val}
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
