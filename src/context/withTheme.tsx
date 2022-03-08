import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Theme, Fonts, ColorThemeKeys, FontKeys } from '../styles/Theme'

const { redTheme, baseStyles } = Theme
const { ffKumbh } = Fonts

export const ThemeContext: FC = ({ children }) => {
   const [currentTheme, setCurrentTheme] = useLocalStorage(
      'themeColor',
      redTheme
   )
   const [currentFont, setCurrentFont] = useLocalStorage('themeFont', ffKumbh)

   const updateTheme = (newTheme: string) => {
      setCurrentTheme(Theme[newTheme as ColorThemeKeys])
   }

   const updateFont = (newFont: string) => {
      setCurrentFont(Fonts[newFont as FontKeys])
   }

   return (
      <ThemeProvider
         theme={{
            baseStyles,
            currentTheme,
            updateTheme,
            currentFont,
            updateFont,
         }}
      >
         {children}
      </ThemeProvider>
   )
}
