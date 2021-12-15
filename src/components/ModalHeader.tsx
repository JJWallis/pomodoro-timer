import React, { FC, memo } from 'react'
import ModalSection from './ModalSection'

interface Props {
   toggle: () => void
}

const ModalHeader: FC<Props> = ({ toggle }) => {
   return (
      <ModalSection header>
         <h3>Settings</h3>
         <button onClick={toggle}>Close</button>
      </ModalSection>
   )
}

export default memo(ModalHeader)
