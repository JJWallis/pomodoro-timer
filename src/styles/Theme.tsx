import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      baseStyles: typeof Theme['baseStyles']
      currentTheme: typeof Theme['redTheme']
      currentFont: typeof Fonts['ffKumbh']
      updateTheme: (newTheme: string) => void
      updateFont: (newFont: string) => void
   }
}

export type ColorThemes = Omit<typeof Theme, 'baseStyles'>

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
   ffKumbh: {
      identifier: 'ffKumbh',
      family: 'Kumbh Sans',
   },
   ffRoboto: {
      identifier: 'ffRoboto',
      family: 'Roboto Slab',
   },
   ffSpaceMono: {
      identifier: 'ffSpaceMono',
      family: 'Space Mono',
   },
}
