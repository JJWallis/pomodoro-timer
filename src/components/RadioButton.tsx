import React, { FC, ChangeEvent, Dispatch } from 'react'

interface Props {
   value: string
   defaultChecked: boolean
   setSelectedOption: Dispatch<React.SetStateAction<string>>
   name: string
   updateTheme: ((newTheme: string) => void) | ((newFont: string) => void)
}

const RadioButton: FC<Props> = ({
   value,
   defaultChecked,
   setSelectedOption,
   updateTheme,
   name,
}) => {
   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setSelectedOption(value)
      updateTheme && updateTheme(value)
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
