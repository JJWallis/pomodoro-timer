import React, { FC, memo, useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useRadioButton } from '../hooks/useRadioButton'
import ModalSection from './ModalSection'
import RadioButton from './RadioButton'

const ModalColors: FC = () => {
   const [selectedOption, setSelectedOption] = useState('redTheme')
   const { updateTheme } = useContext(ThemeContext)
   const radioButtons = useRadioButton({updateTheme, {pm: 'redTheme', sd: 'blueTheme', tr: 'purpleTheme'}})

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
