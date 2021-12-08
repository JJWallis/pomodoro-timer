import React, { FC, memo } from 'react'
import ModalSection from './ModalSection'
import RadioButton from './RadioButton'

const ModalColors: FC = () => {
   const produceRadioButtons = () => {
      const themes = ['theme-red', 'theme-blue', 'theme-purple']
      return themes.map((color) => (
         <RadioButton
            key={color}
            id={color}
            defaultChecked={themes.indexOf(color) === 0 ? true : false}
         />
      ))
   }

   return <ModalSection heading="Color">{produceRadioButtons()}</ModalSection>
}

export default memo(ModalColors)
