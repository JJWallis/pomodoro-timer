import React, { FC } from 'react'
import { ModalSectionContainer as Container } from '../containers/Container.styled'

const ModalSection: FC = ({ children }) => {
   return <Container>{children}</Container>
}

export default ModalSection
