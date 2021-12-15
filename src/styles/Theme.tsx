import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      baseStyles: {
         bgPm: string
         lightGrey: string
      }
      currentTheme: {
         bgPm: string
      }
      updateTheme: (newTheme: string) => void
      currentFont: string
      updateFont: (newFont: string) => void
   }
}

export const Theme = {
   baseStyles: {
      bgPm: '#101021',
      lightGrey: '#CED6FA',
   },
   redTheme: {
      bgPm: 'red',
   },
   blueTheme: {
      bgPm: 'blue',
   },
   purpleTheme: {
      bgPm: 'purple',
   },
}

export const Fonts = {
   ffNoto: 'Noto Sans',
   ffRoboto: 'Roboto',
   ffRobotoMono: 'Roboto Mono',
}
