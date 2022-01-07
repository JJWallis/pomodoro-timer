import React, { FC } from 'react'
import { ModalSectionContainer } from '../containers/ModalContainers'

interface Props {
   header?: boolean
   colors?: boolean
   timerInputs?: boolean
}

const ModalSection: FC<Props> = ({ children, header, colors, timerInputs }) => {
   return (
      <ModalSectionContainer
         header={header}
         colors={colors}
         timerInputs={timerInputs}
      >
         {children}
      </ModalSectionContainer>
   )
}

export default ModalSection
