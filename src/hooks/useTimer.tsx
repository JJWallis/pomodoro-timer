import { useCallback, useEffect, useReducer } from 'react'
import { UseTimerActions, UseTimerState } from './useTimer.interface'

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
         timerLength: 10,
         timeoutId: null,
         isRunning: false,
      }
   )

   const startTimer = useCallback(() => {
      const time = setInterval(() => dispatch({ type: 'COUNT_DOWN' }), 1000)
      dispatch({ type: 'START_TIMER', timeOutId: time })
      // isRunning:
      // checks ref to see if value not there - if so, sets it to 'pomodoro'
   }, [])

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      dispatch({ type: 'END_TIMER' })
   }, [timeoutId])

   useEffect(() => {
      if (timerLength === 0) endTimer()
   }, [timerLength, endTimer])

   return { timerLength, isRunning, dispatch, startTimer, endTimer }
}
