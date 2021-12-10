import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      currentTheme: {
         bgPm: string
      }
      updateTheme: (newTheme: string) => void
      currentFont: string
      updateFont: (newFont: string) => void
   }
}

export const Theme = {
   // bgPm: '#101021',
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
