import { Update } from '../hooks/useRadioButton.interface'

export interface RadioButtonProps {
   theme: string
   defaultChecked: boolean
   setSelectedOption: React.Dispatch<React.SetStateAction<string>>
   updateTheme: Update
}
