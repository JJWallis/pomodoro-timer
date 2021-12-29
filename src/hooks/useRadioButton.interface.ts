export type Update = ((newTheme: string) => void) | ((newFont: string) => void)
export type UseRadioButton = <T extends { identifier: string }>(
   current: T,
   themes: string[],
   update: Update
) => JSX.Element[]
