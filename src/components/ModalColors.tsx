import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import ModalThemeSection from './ModalThemeSection'

const ModalColors: FC = () => {
   const { currentTheme, updateTheme } = useContext(ThemeContext)
   const colors = ['redTheme', 'blueTheme', 'purpleTheme']

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
