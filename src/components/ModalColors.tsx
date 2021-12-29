import React, { FC, memo, useContext } from 'react'
import { useRadioButton } from '../hooks/useRadioButton'
import ModalSection from './ModalSection'
import { FlexContainerModal } from '../containers/Container.styled'
import { ModalTitle } from '../styles/Title.styled'
import { ThemeContext } from 'styled-components'

const ModalColors: FC = () => {
   const { currentTheme, updateTheme } = useContext(ThemeContext)
   const data = ['redTheme', 'blueTheme', 'purpleTheme']
   const defaultTheme = () =>
      data.filter((theme) => currentTheme.identifier === theme)[0]
   const produceRadioButtons = useRadioButton(data, defaultTheme(), updateTheme)

   return (
      <ModalSection colors>
         <FlexContainerModal>
            <ModalTitle subTitle>Color</ModalTitle>
            <FlexContainerModal radioButtons>
               {produceRadioButtons}
            </FlexContainerModal>
         </FlexContainerModal>
      </ModalSection>
   )
}

export default memo(ModalColors)
