import React, { FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme, Fonts } from '../styles/Theme'

const { redTheme, blueTheme, purpleTheme } = Theme
const { ffNoto, ffRoboto, ffRobotoMono } = Fonts

export const ThemeContext: FC = ({ children }) => {
   const [currentTheme, setCurrentTheme] = useState(redTheme)
   const [currentFont, setCurrentFont] = useState(ffNoto)

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

   const updateFont = (newFont: string) => {
      if (newFont === 'font-noto') {
         setCurrentFont(ffNoto)
      } else if (newFont === 'font-roboto') {
         setCurrentFont(ffRoboto)
      } else {
         setCurrentFont(ffRobotoMono)
      }
   }

   return (
      <ThemeProvider theme={{ currentTheme, updateTheme }}>
         {children}
      </ThemeProvider>
   )
}
