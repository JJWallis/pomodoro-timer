import { useState } from 'react'
import RadioButton from '../components/RadioButton'

interface Options {
   initialState: string
   updateTheme: ((newTheme: string) => void) | ((newFont: string) => void)
   // repeated type - export from RadioButton
   themes: {
      pm: string
      sd: string
      tr: string
   }
}

export function useRadioButton({ initialState, updateTheme, themes }: Options) {
   const [selectedOption, setSelectedOption] = useState(initialState)
   const { pm, sd, tr } = themes

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
