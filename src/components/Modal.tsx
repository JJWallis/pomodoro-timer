import React, { FC, useLayoutEffect, useCallback, useRef } from 'react'
import { ModalContainer } from '../containers/Container.styled'
import ModalHeader from './ModalHeader'
import ModalTimers from './ModalTimers'
import ModalColors from './ModalColors'
import ModalFonts from './ModalFonts'
import { ApplyButton } from '../styles/Button.styled'
import { handleChange } from '../hooks/useToggle'
import { useTimerContext } from '../hooks/useTimerContext'
import { useModalContext } from '../hooks/useModalContext'

interface Props {
   isModalToggled: boolean
   setIsModalToggled: handleChange
}

const Modal: FC<Props> = ({ isModalToggled, setIsModalToggled }) => {
   const { dispatch, currentTimerTotal, endTimer, activeTimer } =
      useTimerContext()
   const { state } = useModalContext()
   let updateTimerOnMount = useRef(true)

   const setNewTimer = useCallback(() => {
      const desiredAmount = state[activeTimer as keyof typeof state]
      dispatch({
         type: 'SET_INITIAL_TIMER_LENGTH',
         amount: desiredAmount * 60,
      })
      currentTimerTotal.current = desiredAmount
   }, [currentTimerTotal, dispatch, state, activeTimer])

   const handleApplyBtn = () => {
      endTimer()
      setNewTimer()
      setIsModalToggled()
   }

   useLayoutEffect(() => {
      if (updateTimerOnMount.current) {
         setNewTimer()
         updateTimerOnMount.current = false
      }
   }, [currentTimerTotal, dispatch, setNewTimer, updateTimerOnMount])

   return (
      <ModalContainer opacity={isModalToggled ? 1 : 0} as="section">
         <form>
            <ModalHeader setIsModalToggled={setIsModalToggled} />
            <ModalTimers />
            <ModalFonts />
            <ModalColors />
            <ApplyButton type="submit" onClick={handleApplyBtn}>
               Apply
            </ApplyButton>
         </form>
      </ModalContainer>
   )
}

export default Modal
