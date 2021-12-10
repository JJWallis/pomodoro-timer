import React, { FC, memo, useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import RadioButton from './RadioButton'

const ModalFonts: FC = () => {
   const [selectedOption, setSelectedOption] = useState('ffNoto')
   const { updateFont } = useContext(ThemeContext)

   const produceRadioButtons = () => {
      const themes = ['ffNoto', 'ffRoboto', 'ffRobotoMono']
      return themes.map((theme) => (
         <RadioButton
            key={theme}
            value={theme}
            defaultChecked={selectedOption === theme}
            setSelectedOption={setSelectedOption}
            updateThemeState={updateFont}
         />
      ))
   }

   return <ModalSection heading="Font">{produceRadioButtons()}</ModalSection>
}

export default memo(ModalFonts)
