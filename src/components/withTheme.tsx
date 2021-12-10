import React, { FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme, Fonts } from '../styles/Theme'

const { redTheme } = Theme
const { ffNoto } = Fonts

export const ThemeContext: FC = ({ children }) => {
   const [currentTheme, setCurrentTheme] = useState(redTheme)
   const [currentFont, setCurrentFont] = useState(ffNoto)

   const updateTheme = (newTheme: string) => {
      setCurrentTheme(Theme[newTheme as keyof typeof Theme])
   }

   const updateFont = (newFont: string) =>
      setCurrentFont(Fonts[newFont as keyof typeof Fonts])

   return (
      <ThemeProvider
         theme={{
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
