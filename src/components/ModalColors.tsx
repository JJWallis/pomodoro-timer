import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import ModalThemeSection from './ModalThemeSection'
import { Theme } from '../styles/Theme'

const ModalColors: FC = () => {
   const { currentTheme, updateTheme } = useContext(ThemeContext)
   const colors = ['redTheme', 'blueTheme', 'purpleTheme']
   const newColors = Object.values(Theme)
      .splice(1, 3)
      .map((color: any) => color.identifier)
   // generics

   return (
      <ModalSection colors>
         <ModalThemeSection
            title="Color"
            currentTheme={currentTheme}
            themes={colors}
            updateTheme={updateTheme}
         />
      </ModalSection>
   )
}

export default memo(ModalColors)
