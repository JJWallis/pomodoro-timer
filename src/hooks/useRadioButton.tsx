import { useState } from 'react'
import RadioButton from '../components/RadioButton'
import { UseRadioButton } from './useRadioButton.interface'

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
