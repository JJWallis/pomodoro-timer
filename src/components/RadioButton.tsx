import React, { FC } from 'react'
import { useToggle } from '../hooks/useToggle'
import { withTheme } from '../components/withTheme'

interface Props {
   id: string
   defaultChecked?: boolean
}

const RadioButton: FC<Props> = ({ id, defaultChecked }) => {
   const { toggled, handleChange } = useToggle(defaultChecked)

   return (
      <input
         type="radio"
         name="theme-toggle"
         id={id}
         checked={toggled}
         onChange={handleChange}
      />
   )
}

export default withTheme(RadioButton)
