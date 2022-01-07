import { Update } from '../context/withTheme.interface'

export interface RadioButtonProps {
   theme: string
   defaultChecked: boolean
   setSelectedOption: React.Dispatch<React.SetStateAction<string>>
   updateTheme: Update
   fonts?: boolean
}
