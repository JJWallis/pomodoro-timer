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
         amount: pomodoro,
      })
      currentTimerTotal.current = pomodoro
   }

   // 'SET_INITIAL_TIMER_LENGTH':
   // const minutes = 60 * userInput (in seconds)

   // 'START_TIMER':

   // 'Clock display':
   // export const formatTimer = (leftSeconds) => {
   // const seconds = leftSeconds % 60;
   // const minutes = Math.floor(leftSeconds / 60);
   // const minutesString = minutes > 9 ? minutes : `0${minutes}`;
   // const secondsString = seconds > 9 ? seconds : `0${seconds}`;
   // return `${minutesString}:${secondsString}`;
   //  };

   // export const formatTimerHourBase = (seconds) => {
   //    const hours = Math.floor(seconds / 3600);
   //    const allMinutes = Math.floor(seconds / 60);
   //    const leftMinutes = allMinutes - hours * 60;
   //    return `${hours} hours ${leftMinutes} minutes`;
   //  };

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
