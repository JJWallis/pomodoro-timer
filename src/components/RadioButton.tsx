import React, { FC, useContext, ChangeEvent } from 'react'
import { useToggle } from '../hooks/useToggle'
import { ThemeContext } from 'styled-components'

interface Props {
   id: string
   defaultChecked?: boolean
}

const RadioButton: FC<Props> = ({ id, defaultChecked }) => {
   const { toggled, handleChange } = useToggle(defaultChecked)
   const { updateTheme } = useContext(ThemeContext)

   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e)
      updateTheme(e.target.id)
      console.log(e.target.checked)
   }

   return (
      <input
         type="radio"
         name="theme-toggle"
         id={id}
         checked={toggled}
         onChange={handleRadioToggle}
      />
   )
}

export default RadioButton
