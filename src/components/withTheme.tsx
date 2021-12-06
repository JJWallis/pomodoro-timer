import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../styles/Theme'

export const withTheme = ({ children }: { children: ReactNode }) => {
   return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
