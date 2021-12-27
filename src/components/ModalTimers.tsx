import React, { FC } from 'react'
import ModalSection from './ModalSection'
import ModalTimer from './ModalTimer'
import { useModalContext } from '../hooks/useModalContext'
import { GridContainerModal } from '../containers/Container.styled'
import { ModalTitle } from '../styles/Title.styled'

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
      <ModalSection timerInputs>
         <ModalTitle subTitle modalNumberInput>
            Time (minutes)
         </ModalTitle>
         <GridContainerModal>{produceTimerInputs()}</GridContainerModal>
      </ModalSection>
   )
}

export default ModalTimers
