import React, { FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Theme, Fonts } from '../styles/Theme'

const { redTheme, baseStyles } = Theme
const { ffNoto } = Fonts

export const ThemeContext: FC = ({ children }) => {
   const [currentTheme, setCurrentTheme] = useState(redTheme)
   const [currentFont, setCurrentFont] = useLocalStorage('themeFont', ffNoto)

   const updateTheme = (newTheme: string) => {
      setCurrentTheme(Theme[newTheme as keyof Omit<typeof Theme, 'baseStyles'>])
   }

   const updateFont = (newFont: string) =>
      setCurrentFont(Fonts[newFont as keyof typeof Fonts])

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
