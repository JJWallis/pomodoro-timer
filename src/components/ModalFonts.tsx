import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import { useRadioButton } from '../hooks/useRadioButton'
import { FlexContainerModal } from '../containers/Container.styled'
import { ModalTitle } from '../styles/Title.styled'

const ModalFonts: FC = () => {
   const { updateFont } = useContext(ThemeContext)
   const radioButtons = useRadioButton(updateFont, {
      pm: 'ffKumbh',
      sd: 'ffRoboto',
      tr: 'ffSpaceMono',
   })

   return (
      <ModalSection>
         <FlexContainerModal>
            <ModalTitle subTitle>Font</ModalTitle>
            <FlexContainerModal radioButtons>{radioButtons}</FlexContainerModal>
         </FlexContainerModal>
      </ModalSection>
   )
}

export default memo(ModalFonts)
