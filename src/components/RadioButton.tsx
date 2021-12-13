import React, { FC, ChangeEvent, Dispatch } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Update } from '../hooks/useRadioButton'

interface Props {
   value: string
   defaultChecked: boolean
   setSelectedOption: Dispatch<React.SetStateAction<string>>
   name: string
   updateTheme: Update
}

const RadioButton: FC<Props> = ({
   value,
   defaultChecked,
   setSelectedOption,
   updateTheme,
   name,
}) => {
   const [localName, setLocalName] = useLocalStorage('theme', '')

   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setSelectedOption(value)
      updateTheme(value)
      setLocalName(value)
   }

   return (
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
