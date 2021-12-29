import { useState } from 'react'
import RadioButton from '../components/RadioButton'

export type Update = ((newTheme: string) => void) | ((newFont: string) => void)
type UseRadioButton = <T extends { identifier: string }>(
   current: T,
   themes: string[],
   defaultSelectedOption: string,
   update: Update
) => JSX.Element[]

export const useRadioButton: UseRadioButton = (
   current,
   themes,
   defaultSelectedOption,
   update
) => {
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
