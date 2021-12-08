import React, { ComponentType, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../styles/Theme'

type withThemeType = <T>(Component: ComponentType<T>) => ComponentType<T>

const { redTheme, blueTheme, purpleTheme } = Theme

export const withTheme: withThemeType = (Component) => (props) => {
   const [theme, setTheme] = useState(redTheme)
   const updateTheme = (newTheme: string) => {
      if (newTheme === 'theme-red') {
         setTheme(redTheme)
      } else if (newTheme === 'theme-blue') {
         setTheme(blueTheme)
      } else {
         setTheme(purpleTheme)
      }
      // regex look ahead to split id at capital letter + toLowerCase + replace space with '-'
   }

   return (
      <ThemeProvider theme={theme}>
         <Component {...props} updateTheme={updateTheme} />
      </ThemeProvider>
   )
}
