import React, { FC } from 'react'
import ModalSection from './ModalSection'
import ModalTimer from './ModalTimer'

const ModalTimers: FC = () => {
   return (
      <ModalSection>
         <h3>Time (MINUTES)</h3>
         <ModalTimer label={'pomodoro'} />
      </ModalSection>
   )
}

export default ModalTimers
