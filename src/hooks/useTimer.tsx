import { useState, useCallback, useEffect, useReducer } from 'react'
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
   const [activeTimer, dispatch] = useReducer(reducer, {
      timerLength: 10,
      timeoutId: null,
      isRunning: false,
   })

   const [timerLength, setTimerLength] = useState(10)
   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
   const [isRunning, setIsRunning] = useState(false)

   const startTimer = useCallback(() => {
      const time = setInterval(
         () => setTimerLength((previous) => previous - 1),
         1000
      )
      setTimeoutId(time)
      setIsRunning(true)
   }, [])

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      setIsRunning(false)
   }, [timeoutId])

   useEffect(() => {
      if (timerLength === 0) endTimer()
      // sep callback func when 'break' btn clicked (or any of these btns?)
      // check if isRunning === 'pomodoro'
      // if so sets prevTimerRef.current to current timerLength + updates timerLength with new state (one dispatch)
      // if pomodoro btn hit - first check if prevTimerRef.current is thruthy
      // reset this ref somewhere - if click pomodoro btn while main timer running will reset it
   }, [timerLength, endTimer])

   return { timerLength, setTimerLength, startTimer, endTimer, isRunning }
}
