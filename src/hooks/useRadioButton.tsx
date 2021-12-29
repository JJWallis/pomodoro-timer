import { useState } from 'react'
import RadioButton from '../components/RadioButton'

export type Update = ((newTheme: string) => void) | ((newFont: string) => void)

export function useRadioButton(
   themes: string[],
   defaultSelectedOption: string,
   update: Update
) {
   const [selectedOption, setSelectedOption] = useState(defaultSelectedOption)

   return themes.map((theme) => (
      <RadioButton
         key={theme}
         value={theme}
         defaultChecked={selectedOption === theme}
         setSelectedOption={setSelectedOption}
         updateTheme={update}
         name={theme}
      />
   ))
}

// refactor - pass in currentTheme/Font obj + use identifier prop to get boolean for defaultChecked
// inline arrow func = () => theme === current.identifier
// type Current = <T extends {identifier: string}>
