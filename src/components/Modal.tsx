import React, { FC, useLayoutEffect, useRef } from 'react'
import { useTimerContext } from '../hooks/useTimerContext'
import { useModalContext } from '../hooks/useModalContext'
import { ModalContainer } from '../containers/ModalContainers.styled'
import ModalHeader from './ModalHeader'
import ModalTimers from './ModalTimers'
import ModalColors from './ModalColors'
import ModalFonts from './ModalFonts'
import { ApplyButton } from '../styles/Button.styled'
import { HandleToggle } from '../hooks/useToggle.interface'
import { useCLickOutside } from '../hooks/useClickOutside'

interface Props {
   isModalToggled: boolean
   setIsModalToggled: HandleToggle
}

const Modal: FC<Props> = ({ isModalToggled, setIsModalToggled }) => {
   const { dispatch, currentTimerTotal, endTimer, setNewTimer } =
      useTimerContext()
   const { state } = useModalContext()
   let updateTimerOnMount = useRef(true)
   const modalRef = useRef(null)
   useCLickOutside(modalRef, () => isModalToggled && setIsModalToggled())

   const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
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
   }, [currentTimerTotal, dispatch, setNewTimer, updateTimerOnMount, state])

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
