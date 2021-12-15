import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import { useRadioButton } from '../hooks/useRadioButton'
import { FlexContainerModal } from '../containers/Container.styled'

const ModalFonts: FC = () => {
   const { updateFont } = useContext(ThemeContext)
   const radioButtons = useRadioButton(updateFont, {
      pm: 'ffNoto',
      sd: 'ffRoboto',
      tr: 'ffRobotoMono',
   })

   return (
      <ModalSection>
         <FlexContainerModal>
            <h4>Font</h4>
            <FlexContainerModal radioButtons>{radioButtons}</FlexContainerModal>
         </FlexContainerModal>
      </ModalSection>
   )
}

export default memo(ModalFonts)
