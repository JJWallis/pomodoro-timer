import React, { ComponentType, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../styles/Theme'

type withThemeType = <T>(Component: ComponentType<T>) => ComponentType<T>

export const withTheme: withThemeType = (Component) => (props) => {
   const [theme, setTheme] = useState(Theme.redTheme)
   const updateTheme = (newTheme: string) => {
      if (newTheme === 'theme-red') {
         setTheme(Theme.redTheme)
      } else if (newTheme === 'theme-blue') {
         setTheme(Theme.blueTheme)
      } else {
         setTheme(Theme.purpleTheme)
      }
      // regex look ahead to split id at capital letter + toLowerCase + replace space with '-'
      // vs long ass conditional
   }

   return (
      <ThemeProvider theme={theme}>
         <Component {...props} />
      </ThemeProvider>
   )
}
