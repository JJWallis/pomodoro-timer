import React, { FC, memo, useEffect } from 'react'
import ModalSection from './ModalSection'

interface Props {
   toggle: () => void
}

const ModalHeader: FC<Props> = ({ toggle }) => {
   useEffect(() => console.log('re-rendered ModalHeader'))
   return (
      <ModalSection header>
         <h2>Settings</h2>
         <button onClick={() => toggle()}>Close</button>
      </ModalSection>
   )
}

export default memo(ModalHeader)
