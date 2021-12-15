import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      baseStyles: {
         bgPm: string
         bgSd: string
         lightGrey: string
      }
      currentTheme: {
         accent: string
      }
      updateTheme: (newTheme: string) => void
      currentFont: string
      updateFont: (newFont: string) => void
   }
}

export const Theme = {
   baseStyles: {
      bgPm: '#181932',
      bgSd: '#111325',
      lightGrey: '#CED6FA',
   },
   redTheme: {
      accent: '#F2585D',
   },
   blueTheme: {
      accent: '#65F2F7',
   },
   purpleTheme: {
      accent: '#CE64F5',
   },
}

export const Fonts = {
   ffNoto: 'Noto Sans',
   ffRoboto: 'Roboto',
   ffRobotoMono: 'Roboto Mono',
}
