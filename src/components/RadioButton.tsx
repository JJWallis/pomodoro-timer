import React, { FC, ChangeEvent } from 'react'
import { RadioButtonProps } from './RadioButton.interface'
import { RadioButtonLabel } from '../styles/Label.styled'
import { InputReset } from '../styles/Input.styled'
import { RadioButtonContent } from '../styles/Span.styled'
import { Theme } from '../styles/Theme'
import Tick from '../assets/icon-tik.svg'

const RadioButton: FC<RadioButtonProps> = ({
   theme,
   defaultChecked,
   setSelectedOption,
   updateTheme,
   fonts,
}) => {
   const handleRadioToggle = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setSelectedOption(value)
      updateTheme(value)
   }

   return (
      <RadioButtonLabel
         htmlFor={theme}
         fonts={fonts}
         active={defaultChecked}
         themeBgColor={Theme[theme as keyof Omit<typeof Theme, 'baseStyles'>]}
      >
         <InputReset
            radio
            id={theme}
            type="radio"
            name={theme}
            value={theme}
            checked={defaultChecked}
            onChange={handleRadioToggle}
         />
         <RadioButtonContent
            fonts={fonts}
            active={defaultChecked}
            tick={fonts ? null : Tick}
         />
      </RadioButtonLabel>
   )
}

export default RadioButton
