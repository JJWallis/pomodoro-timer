import React, { FC } from 'react'
import ModalSection from './ModalSection'

const ModalHeader: FC = () => {
   return (
      <ModalSection>
         <h2>Settings</h2>
         <input type="checkbox" />
      </ModalSection>
   )
}

export default ModalHeader
