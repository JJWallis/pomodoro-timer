import React, { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import ModalThemeSection from './ModalThemeSection'
import { Fonts } from '../styles/Theme'

const ModalFonts: FC = () => {
   const { currentFont, updateFont } = useContext(ThemeContext)
   const fonts = Object.values(Fonts).map((font) => font.identifier)

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

export default ModalFonts
