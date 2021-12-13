import { useState } from 'react'
import RadioButton from '../components/RadioButton'

export type Update = ((newTheme: string) => void) | ((newFont: string) => void)

interface Themes {
   pm: string
   sd: string
   tr: string
}

export function useRadioButton(updateTheme: Update, themes: Themes) {
   const { pm, sd, tr } = themes
   const [selectedOption, setSelectedOption] = useState(pm)

   return [pm, sd, tr].map((theme) => (
      <RadioButton
         key={theme}
         value={theme}
         defaultChecked={selectedOption === theme}
         setSelectedOption={setSelectedOption}
         updateTheme={updateTheme}
         name={theme}
      />
   ))
}
