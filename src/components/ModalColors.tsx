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
