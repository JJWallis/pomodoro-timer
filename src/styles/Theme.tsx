import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      baseStyles: {
         bgPm: string
         bgSd: string
         lightGrey: string
         darkGrey: string
         softWhite: string
         hoverTransition: string
         mediaBreakpoint: string
      }
      currentTheme: {
         accent: string
         identifier: string
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
      darkGrey: '#99999A',
      softWhite: '#FFFFFF',
      hoverTransition: '0.2s ease-in-out',
      mediaBreakpoint: '43.999em',
   },
   redTheme: {
      identifier: 'redTheme',
      accent: '#F87070',
   },
   blueTheme: {
      identifier: 'blueTheme',
      accent: '#70F3F8',
   },
   purpleTheme: {
      identifier: 'purpleTheme',
      accent: '#D881F8',
   },
}

export const Fonts = {
   ffKumbh: 'Kumbh Sans',
   ffRoboto: 'Roboto Slab',
   ffSpaceMono: 'Space Mono',
}
