import React, { FC } from 'react'
import { useModalContext } from '../hooks/useModalContext'
import ModalSection from './ModalSection'
import { ModalTitle } from '../styles/Title.styled'
import { GridContainerModal } from '../containers/Container.styled'
import ModalTimer from './ModalTimer'

const ModalTimers: FC = () => {
   const { state } = useModalContext()

   const produceTimerInputs = () => {
      return Object.keys(state).map((key) => (
         <ModalTimer
            key={key}
            label={key}
            val={state[key as keyof typeof state]}
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
