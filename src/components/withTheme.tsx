import React, { ComponentType } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../styles/Theme'

type withThemeType = <T>(Component: ComponentType<T>) => ComponentType<T>

export const withTheme: withThemeType = (Component) => (props) => {
   return (
      <ThemeProvider theme={Theme}>
         <Component {...props} />
      </ThemeProvider>
   )
}
