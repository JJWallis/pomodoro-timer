import { Update } from '../hooks/useRadioButton.interface'

export interface RadioButtonProps {
   value: string
   defaultChecked: boolean
   setSelectedOption: React.Dispatch<React.SetStateAction<string>>
   name: string
   updateTheme: Update
}
