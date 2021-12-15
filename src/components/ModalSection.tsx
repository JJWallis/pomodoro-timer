import React, { FC } from 'react'
import { ModalSectionContainer } from '../containers/Container.styled'

interface Props {
   header?: boolean
   colors?: boolean
}

const ModalSection: FC<Props> = ({ children, header, colors }) => {
   return (
      <ModalSectionContainer header={header} colors={colors}>
         {children}
      </ModalSectionContainer>
   )
}

export default ModalSection
