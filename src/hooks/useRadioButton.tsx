import { useState, useContext } from 'react'
import RadioButton from '../components/RadioButton'
import { ThemeContext } from 'styled-components'

export type Update = ((newTheme: string) => void) | ((newFont: string) => void)
type Themes =
   | {
        pm: string
        sd: string
        tr: string
     }
   | string[]

// const retrieveSelectedOption = (key: string) => {
//    const previousOption = localStorage.getItem(key)
//    if (previousOption) return JSON.parse(previousOption)
// }

// const previousOption = retrieveSelectedOption(key)
// const {} = useContext(ThemeContext)
// key: string - param

export function useRadioButton(themes: Themes, defaultSelectedOption: string) {
   const [selectedOption, setSelectedOption] = useState(defaultSelectedOption)
   const { updateTheme } = useContext(ThemeContext)

   return Object.values(themes).map((theme) => (
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
