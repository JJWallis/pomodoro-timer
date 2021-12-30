import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import ModalThemeSection from './ModalThemeSection'

const ModalFonts: FC = () => {
   const { currentFont, updateFont } = useContext(ThemeContext)
   const fonts = ['ffKumbh', 'ffRoboto', 'ffSpaceMono']

   return (
      <ModalSection>
         <ModalThemeSection
            title="Font"
            currentTheme={currentFont}
            themes={fonts}
            updateTheme={updateFont}
         />
      </ModalSection>
   )
}

export default memo(ModalFonts)
