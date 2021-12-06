import React, { ReactNode, ComponentType } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../styles/Theme'

// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
//    return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
// }

type withThemeType = <T>(Component: ComponentType<T>) => ComponentType<T>

export const withTheme: withThemeType = (Component) => (props) => {
   return (
      <ThemeProvider theme={Theme}>
         <Component {...props} />
      </ThemeProvider>
   )
}
