import React, { FC } from 'react'
import { ModalSectionContainer } from '../containers/Container.styled'

interface Props {
   header?: boolean
}

const ModalSection: FC<Props> = ({ children, header }) => {
   return (
      <ModalSectionContainer header={header}>{children}</ModalSectionContainer>
   )
}

export default ModalSection
