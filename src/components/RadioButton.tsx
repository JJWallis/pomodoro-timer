import React, { FC, ChangeEvent } from 'react'
import { RadioButtonProps } from './RadioButton.interface'

const RadioButton: FC<RadioButtonProps> = ({
   value,
   defaultChecked,
   setSelectedOption,
   updateTheme,
   name,
}) => {
   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setSelectedOption(value)
      updateTheme(value)
   }

   return (
      // <label htmlFor=""></label>
      <input
         type="radio"
         name={name}
         value={value}
         checked={defaultChecked}
         onChange={handleRadioToggle}
      />
   )
}

export default RadioButton
