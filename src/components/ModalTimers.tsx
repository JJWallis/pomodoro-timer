import React, { FC } from 'react'
import ModalSection from './ModalSection'
import ModalTimer from './ModalTimer'

const ModalTimers: FC = () => {
   return (
      <ModalSection>
         <h3>Time (MINUTES)</h3>
         <ModalTimer label={'pomodoro'} />
         <ModalTimer label={'short-break'} />
         <ModalTimer label={'long-break'} />
      </ModalSection>
   )
}

export default ModalTimers
