import React, { FC } from 'react'
import { ModalSectionContainer } from '../containers/Container.styled'

const ModalSection: FC = ({ children }) => {
   return <ModalSectionContainer>{children}</ModalSectionContainer>
}

export default ModalSection
