import { useCallback, useEffect, useReducer, useRef } from 'react'
import {
   PreviousTimer,
   UseTimerActions,
   UseTimerState,
} from './useTimer.interface'

function reducer(state: UseTimerState, action: UseTimerActions) {
   switch (action.type) {
      case 'SET_INITIAL_TIMER_LENGTH':
         return { ...state, timerLength: action.amount }
      case 'START_TIMER':
         return { ...state, timeoutId: action.timeOutId, isRunning: true }
      case 'COUNT_DOWN':
         return { ...state, timerLength: state.timerLength - 1 }
      case 'END_TIMER':
         return { ...state, isRunning: false }
      default:
         throw new Error('Action not recognized')
   }
}

export function useTimer() {
   const [{ isRunning, timeoutId, timerLength }, dispatch] = useReducer(
      reducer,
      {
         timerLength: 0,
         timeoutId: null,
         isRunning: false,
      }
   )
   const currentTimerTotal = useRef<number | null>(null)
   const prevTimer = useRef<PreviousTimer>({ timer: 'pomodoro', amount: null })

   const startTimer = useCallback(() => {
      const time = setInterval(() => dispatch({ type: 'COUNT_DOWN' }), 1000)
      dispatch({ type: 'START_TIMER', timeOutId: time })
   }, [])

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      dispatch({ type: 'END_TIMER' })
   }, [timeoutId])

   const formatTimer = (leftSeconds: number) => {
      const seconds = leftSeconds % 60
      const minutes = Math.floor(leftSeconds / 60)
      const minutesString = minutes > 9 ? minutes : `0${minutes}`
      const secondsString = seconds > 9 ? seconds : `0${seconds}`
      return `${minutesString}:${secondsString}`
   }

   // TODO:

   // If input > 60 - EXTRA HOURS:
   // export const formatTimerHourBase = (seconds) => {
   //    const hours = Math.floor(seconds / 3600);
   //    const allMinutes = Math.floor(seconds / 60);
   //    const leftMinutes = allMinutes - hours * 60;
   //    return `${hours} hours ${leftMinutes} minutes`;
   //  };

   useEffect(() => {
      if (timerLength === 0) endTimer()
   }, [timerLength, endTimer])

   return {
      timerLength,
      isRunning,
      dispatch,
      startTimer,
      endTimer,
      prevTimer,
      currentTimerTotal,
      formatTimer,
   }
}
