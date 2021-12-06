import React, { FC } from 'react'
import { useToggle } from '../hooks/useToggle'
import { withTheme } from '../components/withTheme'

interface Props {
   id: string
   defaultChecked?: boolean
   updateTheme?: (newTheme: string) => void
}

const RadioButton: FC<Props> = ({ id, defaultChecked, updateTheme }) => {
   const { toggled, handleChange } = useToggle(defaultChecked)

   const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e)
      updateTheme && updateTheme(e.target.id)
   }

   return (
      <input
         type="radio"
         name="theme-toggle"
         id={id}
         checked={toggled}
         onChange={handleThemeChange}
      />
   )
}

export default withTheme(RadioButton)
