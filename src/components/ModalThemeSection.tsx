import React, { FC } from 'react'
import { useRadioButton } from '../hooks/useRadioButton'
import { FlexContainerModal } from '../containers/FlexContainerModal.styled'
import { ModalTitle } from '../styles/Title.styled'
import type { CurrentTheme, Update } from '../context/withTheme.interface'

interface Props {
   title: string
   updateTheme: Update
   themes: string[]
   currentTheme: CurrentTheme
}

const ModalThemeSection: FC<Props> = ({
   title,
   currentTheme,
   themes,
   updateTheme,
}) => {
   return (
      <FlexContainerModal>
         <ModalTitle subTitle>{title}</ModalTitle>
         <FlexContainerModal radioButtons>
            {useRadioButton(currentTheme, themes, updateTheme)}
         </FlexContainerModal>
      </FlexContainerModal>
   )
}

export default ModalThemeSection
