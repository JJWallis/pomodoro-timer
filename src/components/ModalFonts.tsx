import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useRadioButton } from '../hooks/useRadioButton'
import ModalSection from './ModalSection'
import { FlexContainerModal } from '../containers/Container.styled'
import { ModalTitle } from '../styles/Title.styled'

const ModalFonts: FC = () => {
   const { currentFont, updateFont } = useContext(ThemeContext)
   const fonts = ['ffKumbh', 'ffRoboto', 'ffSpaceMono']
   const produceRadioButtons = useRadioButton(currentFont, fonts, updateFont)

   return (
      <ModalSection>
         <FlexContainerModal>
            <ModalTitle subTitle>Font</ModalTitle>
            <FlexContainerModal radioButtons>
               {produceRadioButtons}
            </FlexContainerModal>
         </FlexContainerModal>
      </ModalSection>
   )
}

export default memo(ModalFonts)
