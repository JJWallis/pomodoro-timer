import { useState } from 'react'
import RadioButton from '../components/RadioButton'

interface Options {
   updateTheme: ((newTheme: string) => void) | ((newFont: string) => void)
   // repeated type - export from RadioButton
   themes: Themes
}

interface Themes {
   pm: string
   sd: string
   tr: string
}

export function useRadioButton({
   updateTheme,
   themes: { pm, sd, tr },
}: Options) {
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
