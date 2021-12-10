import React, { FC, memo, ChangeEvent, useContext, useState } from 'react'
import ModalSection from './ModalSection'
import { ThemeContext } from 'styled-components'
import RadioButton from './RadioButton'

const ModalColors: FC = () => {
   const [selectedTheme, setSelectedTheme] = useState('theme-red')
   const { updateTheme } = useContext(ThemeContext)

   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      setSelectedTheme(e.target.value)
      updateTheme(e.target.value)
      console.log(e.target.checked)
   }

   const produceRadioButtons = () => {
      const themes = ['theme-red', 'theme-blue', 'theme-purple']
      return themes.map((theme) => (
         <RadioButton
            key={theme}
            value={theme}
            defaultChecked={theme === 'theme-red'}
         />
      ))
   }

   return (
      // form tag
      <ModalSection heading="Color">
         <input
            type="radio"
            name="theme-toggle"
            value="theme-red"
            checked={selectedTheme === 'theme-red'}
            onChange={handleRadioToggle}
         />
         <input
            type="radio"
            name="theme-toggle"
            value="theme-blue"
            checked={selectedTheme === 'theme-blue'}
            onChange={handleRadioToggle}
         />
         <input
            type="radio"
            name="theme-toggle"
            value="theme-purple"
            checked={selectedTheme === 'theme-purple'}
            onChange={handleRadioToggle}
         />
      </ModalSection>
   )
}

export default memo(ModalColors)
