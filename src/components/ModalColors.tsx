import React, { FC } from 'react'
import ModalSection from './ModalSection'
import RadioButton from './RadioButton'

const ModalColors: FC = () => {
   return (
      <ModalSection heading="Color">
         <RadioButton id="theme-red" />
         <RadioButton id="theme-blue" />
         <RadioButton id="theme-purple" />
      </ModalSection>
   )
}

export default ModalColors
