import React, { FC, useContext, ChangeEvent } from 'react'
import { ThemeContext } from 'styled-components'

interface Props {
   value: string
   defaultChecked?: boolean
}

const RadioButton: FC<Props> = ({ value, defaultChecked }) => {
   const { updateTheme } = useContext(ThemeContext)
   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      updateTheme(e.target.value)
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
