import React, { FC, memo } from 'react'
import ModalSection from './ModalSection'
import { FlexContainerModal } from '../containers/Container.styled'

interface Props {
   toggle: () => void
}

const ModalHeader: FC<Props> = ({ toggle }) => {
   return (
      <ModalSection header>
         <FlexContainerModal header>
            <h3>Settings</h3>
            <button onClick={toggle}>Close</button>
         </FlexContainerModal>
      </ModalSection>
   )
}

export default memo(ModalHeader)
