import { useState } from 'react'
import RadioButton from '../components/RadioButton'

export type Update = ((newTheme: string) => void) | ((newFont: string) => void)

export function useRadioButton(
   themes: string[],
   defaultSelectedOption: string,
   update: Update
) {
   const [selectedOption, setSelectedOption] = useState(defaultSelectedOption)

   return Object.values(themes).map((theme) => (
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

// const retrieveSelectedOption = (key: string) => {
//    const previousOption = localStorage.getItem(key)
//    if (previousOption) return JSON.parse(previousOption)
// }

// const previousOption = retrieveSelectedOption(key)
// const {} = useContext(ThemeContext)
// key: string - param
