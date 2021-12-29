import React, { FC, memo } from 'react'
import ModalSection from './ModalSection'
import { FlexContainerModal } from '../containers/Container.styled'
import { Close } from '../styles/Icon.styled'
import { Button } from '../styles/Button.styled'
import { handleChange } from '../hooks/useToggle'
import { ModalTitle } from '../styles/Title.styled'
import { useTimerContext } from '../hooks/useTimerContext'
import { useModalContext } from '../hooks/useModalContext'

interface Props {
   setIsModalToggled: handleChange
}

const ModalHeader: FC<Props> = ({ setIsModalToggled }) => {
   const { setNewTimer } = useTimerContext()
   const { state } = useModalContext()

   const handleCloseBtn = () => {
      setIsModalToggled()
      setNewTimer(state)
   }

   return (
      <ModalSection header>
         <FlexContainerModal as="header" header>
            <ModalTitle as="h2">Settings</ModalTitle>
            <Button
               aria-label="Toggle modal visibility"
               cross
               onClick={handleCloseBtn}
            >
               <Close xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
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
