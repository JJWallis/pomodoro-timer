import React, { FC, memo, useState } from 'react'
import ModalSection from './ModalSection'
import RadioButton from './RadioButton'

const ModalColors: FC = () => {
   const [selectedOption, setSelectedOption] = useState('theme-red')

   const produceRadioButtons = () => {
      const themes = ['theme-red', 'theme-blue', 'theme-purple']
      return themes.map((theme) => (
         <RadioButton
            key={theme}
            value={theme}
            defaultChecked={selectedOption === theme}
            setSelectedOption={setSelectedOption}
         />
      ))
   }

   return (
      // form tag
      <ModalSection heading="Color">{produceRadioButtons()}</ModalSection>
   )
}

export default memo(ModalColors)

// model fonts in one object + colours in another (all within parent theme obj)
// two methods to update colours + other for fonts - pass both down (live in theme provider obj)
// same logic above - different state str values
