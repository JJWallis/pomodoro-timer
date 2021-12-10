import React, { ComponentType, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../styles/Theme'

type withThemeType = <T>(Component: ComponentType<T>) => ComponentType<T>

const { redTheme, blueTheme, purpleTheme } = Theme

export const withTheme: withThemeType = (Component) => (props) => {
   const [currentTheme, setCurrentTheme] = useState(redTheme)
   const updateTheme = (newTheme: string) => {
      if (newTheme === 'theme-red') {
         setCurrentTheme(redTheme)
      } else if (newTheme === 'theme-blue') {
         setCurrentTheme(blueTheme)
      } else {
         setCurrentTheme(purpleTheme)
      }
      // regex look ahead to split id at capital letter + toLowerCase + replace space with '-'
      // refactor useTheme into Context folder
   }

   return (
      <ThemeProvider theme={{ currentTheme, updateTheme }}>
         <Component {...props} />
      </ThemeProvider>
   )
}
