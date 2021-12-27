import React, { FC, memo } from 'react'
import ModalSection from './ModalSection'
import { FlexContainerModal } from '../containers/Container.styled'
import { Close } from '../styles/Icon.styled'
import { Button } from '../styles/Button.styled'
import { handleChange } from '../hooks/useToggle'
import { ModalTitle } from '../styles/Title.styled'

interface Props {
   setIsModalToggled: handleChange
}

const ModalHeader: FC<Props> = ({ setIsModalToggled }) => {
   return (
      <ModalSection header>
         <FlexContainerModal header>
            <ModalTitle>Settings</ModalTitle>
            <Button cross onClick={setIsModalToggled}>
               <Close xmlns="http://www.w3.org/2000/svg" width="18" height="17">
                  <path
                     fillRule="evenodd"
                     d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                  />
               </Close>
            </Button>
         </FlexContainerModal>
      </ModalSection>
   )
}

export default memo(ModalHeader)
