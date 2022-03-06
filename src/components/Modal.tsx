import React, { FC, useLayoutEffect, useRef, FormEvent } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { useModalContext } from '../hooks/useModalContext'
import { ModalContainer } from '../containers/ModalContainers.styled'
import { ApplyButton } from '../styles/Button.styled'
import { useCLickOutside } from '../hooks/useClickOutside'
import ModalHeader from './ModalHeader'
import ModalTimers from './ModalTimers'
import ModalColors from './ModalColors'
import ModalFonts from './ModalFonts'
import type { HandleToggle } from '../hooks/useToggle.interface'

interface Props {
   isModalToggled: boolean
   setIsModalToggled: HandleToggle
}

const Modal: FC<Props> = ({ isModalToggled, setIsModalToggled }) => {
   const { endTimer, setNewTimer } = useTimerContext()
   const { state } = useModalContext()
   const modalRef = useRef(null)
   let updateTimerOnMount = useRef(true)
   useCLickOutside(modalRef, () => isModalToggled && setIsModalToggled())

   const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      endTimer()
      setNewTimer(state)
      setIsModalToggled()
   }

   useLayoutEffect(() => {
      if (updateTimerOnMount.current) {
         setNewTimer(state)
         updateTimerOnMount.current = false
      }
   }, [setNewTimer, updateTimerOnMount, state])

   return (
      <ModalContainer
         id="modal-container"
         ref={modalRef}
         opacity={isModalToggled ? 1 : 0}
         as="section"
      >
         <ModalHeader setIsModalToggled={setIsModalToggled} />
         <form onSubmit={handleSubmission}>
            <ModalTimers />
            <ModalFonts />
            <ModalColors />
            <ApplyButton>Apply</ApplyButton>
         </form>
      </ModalContainer>
   )
}

export default Modal
