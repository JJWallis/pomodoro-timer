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
         lightAccent: string
      }
      updateTheme: (newTheme: string) => void
      currentFont: string
      updateFont: (newFont: string) => void
   }
}

export const Theme = {
   baseStyles: {
      bgPm: '#1E213F',
      bgSd: '#161932',
      lightGrey: '#EFF1FA',
      softWhite: '#FFFFFF',
      hoverTransition: '0.2s ease-in-out',
      mediaBreakpoint: '700px',
   },
   redTheme: {
      accent: '#F87070',
      lightAccent: '#ff9494',
   },
   blueTheme: {
      accent: '#70F3F8',
      lightAccent: '#92f9fc',
   },
   purpleTheme: {
      accent: '#D881F8',
      lightAccent: '#e4a2fc',
   },
}

export const Fonts = {
   ffKumbh: 'Kumbh Sans',
   ffRoboto: 'Roboto Slab',
   ffSpaceMono: 'Space Mono',
}
