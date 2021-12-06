import React, { FC } from 'react'
import { ModalSectionContainer } from '../containers/Container.styled'

interface Props {
   header?: boolean
   heading?: string
}

const ModalSection: FC<Props> = ({ children, header, heading }) => {
   return (
      <ModalSectionContainer header={header ? header : false}>
         <h3>{heading}</h3>
         {children}
      </ModalSectionContainer>
   )
}

export default ModalSection
