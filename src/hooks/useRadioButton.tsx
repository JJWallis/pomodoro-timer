import { useState } from 'react'
import RadioButton from '../components/RadioButton'

export type Update = ((newTheme: string) => void) | ((newFont: string) => void)
type UseRadioButton = <T extends { identifier: string }>(
   current: T,
   themes: string[],
   update: Update
) => JSX.Element[]

export const useRadioButton: UseRadioButton = (current, themes, update) => {
   const [selectedOption, setSelectedOption] = useState(current.identifier)

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
