import React, { FC, ChangeEvent, Dispatch } from 'react'

interface Props {
   value: string
   defaultChecked: boolean
   setSelectedOption: Dispatch<React.SetStateAction<string>>
   updateThemeState?: (newTheme: string) => void
   updateFont?: (newFont: string) => void
}

const RadioButton: FC<Props> = ({
   value,
   defaultChecked,
   setSelectedOption,
   updateThemeState,
   updateFont,
}) => {
   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setSelectedOption(value)
      updateThemeState && updateThemeState(value)
      updateFont && updateFont(value)
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
