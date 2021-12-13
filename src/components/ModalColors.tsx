import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useRadioButton } from '../hooks/useRadioButton'
import ModalSection from './ModalSection'

const ModalColors: FC = () => {
   const { updateTheme } = useContext(ThemeContext)
   const radioButtons = useRadioButton(updateTheme, {
      pm: 'redTheme',
      sd: 'blueTheme',
      tr: 'purpleTheme',
   })

   return (
      // form tag
      <ModalSection heading="Color">{radioButtons}</ModalSection>
   )
}

export default memo(ModalColors)
