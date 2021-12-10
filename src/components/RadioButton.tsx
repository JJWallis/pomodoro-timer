import React, { FC, useContext, ChangeEvent, Dispatch } from 'react'
import { ThemeContext } from 'styled-components'

interface Props {
   value: string
   defaultChecked?: boolean
   setTheme: Dispatch<React.SetStateAction<string>>
}

const RadioButton: FC<Props> = ({ value, defaultChecked, setTheme }) => {
   const { updateTheme } = useContext(ThemeContext)
   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setTheme(value)
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
