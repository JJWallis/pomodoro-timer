import React, { FC, useContext, ChangeEvent, Dispatch } from 'react'
import { ThemeContext } from 'styled-components'

interface Props {
   value: string
   defaultChecked: boolean
   setSelectedOption: Dispatch<React.SetStateAction<string>>
}

const RadioButton: FC<Props> = ({
   value,
   defaultChecked,
   setSelectedOption,
}) => {
   const { updateTheme } = useContext(ThemeContext)
   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setSelectedOption(value)
      updateTheme(value)
   }

   return (
      <input
         type="radio"
         name="theme-toggle"
         value={value}
         checked={defaultChecked}
         onChange={handleRadioToggle}
      />
   )
}

export default RadioButton
