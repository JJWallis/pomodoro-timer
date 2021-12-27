import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      baseStyles: {
         bgPm: string
         bgSd: string
         lightGrey: string
         softWhite: string
         hoverTransition: string
         mediaBreakpoint: string
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
      softWhite: '#CFD7FF',
      hoverTransition: '0.2s ease-in-out',
      mediaBreakpoint: '700px',
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
