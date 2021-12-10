import React, { FC, memo, ChangeEvent, useContext } from 'react'
import ModalSection from './ModalSection'
import { ThemeContext } from 'styled-components'

const ModalColors: FC = () => {
   const { updateTheme } = useContext(ThemeContext)

   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      // handleChange(e)
      updateTheme(e.target.id)
      console.log(e.target.checked)
   }

   return (
      // form tag
      <ModalSection heading="Color">
         <input
            type="radio"
            name="theme-toggle"
            // checked={toggled}
            onChange={handleRadioToggle}
         />
      </ModalSection>
   )
}

export default memo(ModalColors)

// const produceRadioButtons = () => {
//    const themes = ['theme-red', 'theme-blue', 'theme-purple']
//    return themes.map((color) => (
//       <RadioButton
//          key={color}
//          id={color}
//          defaultChecked={themes.indexOf(color) === 0 ? true : false}
//       />
//    ))
// }
