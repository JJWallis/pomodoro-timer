import { CurrentTheme, Update } from '../context/withTheme.interface'

export type UseRadioButton = (
   current: CurrentTheme,
   themes: string[],
   update: Update
) => JSX.Element[]
