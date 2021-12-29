import React, { FC, ChangeEvent } from 'react'
import { RadioButtonProps } from './RadioButton.interface'
import { RadioButtonLabel } from '../styles/Label.styled'

const RadioButton: FC<RadioButtonProps> = ({
   theme,
   defaultChecked,
   setSelectedOption,
   updateTheme,
   fonts,
}) => {
   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setSelectedOption(value)
      updateTheme(value)
   }

   return (
      <RadioButtonLabel htmlFor={theme} fonts={fonts}>
         <input
            id={theme}
            type="radio"
            name={theme}
            value={theme}
            checked={defaultChecked}
            onChange={handleRadioToggle}
         />
      </RadioButtonLabel>
   )
}

export default RadioButton
