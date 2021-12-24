import React, { FC, useEffect, useLayoutEffect } from 'react'
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
   const { dispatch, currentTimerTotal, endTimer } = useTimerContext()
   const {
      state: { pomodoro },
   } = useModalContext()

   const setNewTimer = () => {
      dispatch({
         type: 'SET_INITIAL_TIMER_LENGTH',
         amount: pomodoro * 100,
      })
      currentTimerTotal.current = pomodoro
   }

   // 'SET_INITIAL_TIMER_LENGTH':
   // const minutes = 60 * userInput
   // 'START_TIMER':
   //
   // 'Clock display':
   // minutes = minutes < 10 ? "0" + minutes : minutes; | seconds = seconds < 10 ? "0" + seconds : seconds;

   // const test = (duration?: number) => {
   //    const minutes = Math.floor(duration / 60)
   //    const seconds = duration - minutes * 60
   //    console.log(minutes, seconds)
   // }

   const handleApplyBtn = () => {
      setNewTimer()
      endTimer()
   }

   useLayoutEffect(setNewTimer, [])

   return (
      <ModalContainer opacity={isModalToggled ? 1 : 0}>
         <ModalHeader setIsModalToggled={setIsModalToggled} />
         <ModalTimers />
         <ModalFonts />
         <ModalColors />
         <ApplyButton type="button" onClick={handleApplyBtn}>
            Apply
         </ApplyButton>
      </ModalContainer>
   )
}

export default Modal
