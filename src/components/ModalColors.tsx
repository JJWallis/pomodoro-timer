import React, { FC } from 'react'
import ModalSection from './ModalSection'
import RadioButton from './RadioButton'
import { useRender } from '../hooks/useRender'

const ModalColors: FC = () => {
   useRender()
   // dont want this to render if count state changes in Modal or opacity toggle state

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

export default ModalColors
