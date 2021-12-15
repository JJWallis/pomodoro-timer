import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import { useRadioButton } from '../hooks/useRadioButton'

const ModalFonts: FC = () => {
   const { updateFont } = useContext(ThemeContext)
   const radioButtons = useRadioButton(updateFont, {
      pm: 'ffNoto',
      sd: 'ffRoboto',
      tr: 'ffRobotoMono',
   })

   return <ModalSection>{radioButtons}</ModalSection>
}

export default memo(ModalFonts)
