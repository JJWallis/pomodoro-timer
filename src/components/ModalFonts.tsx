import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import { useRadioButton } from '../hooks/useRadioButton'
import { FlexContainerModal } from '../containers/Container.styled'
import { ModalTitle } from '../styles/Title.styled'

const ModalFonts: FC = () => {
   const { currentFont, updateFont } = useContext(ThemeContext)
   const data = ['ffKumbh', 'ffRoboto', 'ffSpaceMono']
   const defaultFont = () => data.filter((font) => currentFont === font)[0]
   const produceRadioButtons = useRadioButton(data, defaultFont(), updateFont)

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
