import React, { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import ModalThemeSection from './ModalThemeSection'
import { Theme, ColorThemes } from '../styles/Theme'

const ModalColors: FC = () => {
   const { currentTheme, updateTheme } = useContext(ThemeContext)
   const produceColors = (colors: Partial<ColorThemes>) => {
      return Object.values(colors)
         .splice(1, 3)
         .map((color) => color.identifier)
   }

   return (
      <ModalSection colors>
         <ModalThemeSection
            title="Color"
            currentTheme={currentTheme}
            themes={produceColors(Theme)}
            updateTheme={updateTheme}
         />
      </ModalSection>
   )
}

export default ModalColors
