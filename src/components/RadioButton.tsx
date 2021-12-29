import React, { FC, ChangeEvent } from 'react'
import { RadioButtonProps } from './RadioButton.interface'

const RadioButton: FC<RadioButtonProps> = ({
   theme,
   defaultChecked,
   setSelectedOption,
   updateTheme,
}) => {
   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setSelectedOption(value)
      updateTheme(value)
   }

   return (
      <label htmlFor={theme}>
         <input
            id={theme}
            type="radio"
            name={theme}
            value={theme}
            checked={defaultChecked}
            onChange={handleRadioToggle}
         />
      </label>
   )
}

export default RadioButton
