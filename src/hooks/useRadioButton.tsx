import { useState } from 'react'
import RadioButton from '../components/RadioButton'
import type { UseRadioButton } from './useRadioButton.interface'

export const useRadioButton: UseRadioButton = (current, themes, update) => {
   const { identifier } = current
   const [selectedOption, setSelectedOption] = useState(identifier)
   const isFonts = themes.filter(
      (theme) =>
         theme === 'ffKumbh' || theme === 'ffRoboto' || theme === 'ffSpaceMono'
   ).length

   return themes.map((theme) => (
      <RadioButton
         key={theme}
         theme={theme}
         defaultChecked={selectedOption === theme}
         setSelectedOption={setSelectedOption}
         updateTheme={update}
         fonts={isFonts ? true : false}
      />
   ))
}
