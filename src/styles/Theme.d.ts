import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      baseStyles: {
         bgPm: string
         bgSd: string
         lightGrey: string
         softWhite: string
      }
      currentTheme: {
         accent: string
      }
      updateTheme: (newTheme: string) => void
      currentFont: string
      updateFont: (newFont: string) => void
   }
}
