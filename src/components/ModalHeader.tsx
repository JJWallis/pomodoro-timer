import React, { FC } from 'react'
import ModalSection from './ModalSection'
import { withToggler } from './withToggler'

const ModalHeader: FC = () => {
   return (
      <ModalSection>
         <h2>Settings</h2>
         <input type="checkbox" />
      </ModalSection>
   )
}

export default withToggler(ModalHeader)
