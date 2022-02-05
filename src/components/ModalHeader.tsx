import React, { FC } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { useModalContext } from '../hooks/useModalContext'
import ModalSection from './ModalSection'
import { FlexContainerModal } from '../containers/FlexContainerModal.styled'
import { ModalTitle } from '../styles/Title.styled'
import { Button } from '../styles/Button.styled'
import { Close } from '../styles/Icon.styled'
import { HandleToggle } from '../hooks/useToggle.interface'

interface Props {
   setIsModalToggled: HandleToggle
}

const ModalHeader: FC<Props> = ({ setIsModalToggled }) => {
   const { setNewTimer, endTimer } = useTimerContext()
   const { state } = useModalContext()

   const handleCloseBtn = () => {
      setIsModalToggled()
      endTimer()
      setNewTimer(state)
   }

   return (
      <ModalSection header>
         <FlexContainerModal as="header" header>
            <ModalTitle as="h2">Settings</ModalTitle>
            <Button
               cross
               onClick={handleCloseBtn}
               aria-label="Toggle modal visibility"
               aria-controls="modal-container"
            >
               <Close viewBox="0 0 18 17" aria-hidden="true" focusable="false">
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

export default ModalHeader
