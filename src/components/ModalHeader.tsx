import React, { FC } from 'react'
import ModalSection from './ModalSection'
import { withToggler } from './withToggler'

interface ModalHeaderProps {
   toggle: () => void
   isToggled: boolean
}

const ModalHeader: FC<ModalHeaderProps> = ({ toggle, isToggled }) => {
   return (
      <ModalSection>
         <h2>Settings</h2>
         <input type="checkbox" />
      </ModalSection>
   )
}

export default withToggler(ModalHeader)
