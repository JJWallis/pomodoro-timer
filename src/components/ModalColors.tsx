import React, { FC, memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useRadioButton } from '../hooks/useRadioButton'
import ModalSection from './ModalSection'
import { FlexContainerModal } from '../containers/Container.styled'

const ModalColors: FC = () => {
   const { updateTheme } = useContext(ThemeContext)
   const radioButtons = useRadioButton(updateTheme, {
      pm: 'redTheme',
      sd: 'blueTheme',
      tr: 'purpleTheme',
   })

   return (
      <ModalSection colors>
         <FlexContainerModal>
            <h3>Color</h3>
            <FlexContainerModal radioButtons>{radioButtons}</FlexContainerModal>
         </FlexContainerModal>
      </ModalSection>
   )
}

export default memo(ModalColors)
