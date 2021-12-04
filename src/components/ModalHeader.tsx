import React, { FC } from 'react'
import ModalSection from './ModalSection'

interface Props {
   toggle: () => void
}

const ModalHeader: FC<Props> = ({ toggle }) => {
   return (
      <ModalSection>
         <h2>Settings</h2>
         <button onClick={() => toggle()}>Close</button>
      </ModalSection>
   )
}

export default ModalHeader
