import React, { FC, ChangeEvent } from 'react'
import { RadioButtonLabel } from '../styles/Label.styled'
import { InputReset } from '../styles/Input.styled'
import { RadioButtonContent } from '../styles/Span.styled'
import { Theme, ColorThemeKeys } from '../styles/Theme'
import Tick from '../assets/icon-tik.svg'
import type { RadioButtonProps } from './RadioButton.interface'

const RadioButton: FC<RadioButtonProps> = ({
   theme,
   defaultChecked,
   setSelectedOption,
   updateTheme,
   fonts,
}) => {
   const handleRadioToggle = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const { value } = target
      setSelectedOption(value)
      updateTheme(value)
   }

   return (
      <RadioButtonLabel
         htmlFor={theme}
         fonts={fonts}
         active={defaultChecked}
         themeBgColor={Theme[theme as ColorThemeKeys]}
         aria-label={fonts ? 'font toggle' : 'theme toggle'}
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
