import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import ModalThemeSection from './ModalThemeSection'
import { Theme, ColorThemes } from '../styles/Theme'

const ModalColors: FC = () => {
   const { currentTheme, updateTheme } = useContext(ThemeContext)
   const colors = Object.values(Theme)
      .splice(1, 3)
      .map((color: any) => color.identifier)

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
