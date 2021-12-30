import { CurrentTheme, Update } from '../components/withTheme.interface'

export type UseRadioButton = (
   current: CurrentTheme,
   themes: string[],
   update: Update
) => JSX.Element[]
