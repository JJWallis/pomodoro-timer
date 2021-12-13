import React, { FC, memo, useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import RadioButton from './RadioButton'

const ModalColors: FC = () => {
   const [selectedOption, setSelectedOption] = useState('redTheme')
   const { updateTheme } = useContext(ThemeContext)

   const produceRadioButtons = () => {
      return ['redTheme', 'blueTheme', 'purpleTheme'].map((theme) => (
         <RadioButton
            key={theme}
            value={theme}
            defaultChecked={selectedOption === theme}
            setSelectedOption={setSelectedOption}
            updateTheme={updateTheme}
            name={theme}
         />
      ))
   }

   return (
      // form tag
      <ModalSection heading="Color">{produceRadioButtons()}</ModalSection>
   )
}

export default memo(ModalColors)
