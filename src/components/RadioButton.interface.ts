import { Update } from '../components/withTheme.interface'

export interface RadioButtonProps {
   theme: string
   defaultChecked: boolean
   setSelectedOption: React.Dispatch<React.SetStateAction<string>>
   updateTheme: Update
   fonts?: boolean
}
