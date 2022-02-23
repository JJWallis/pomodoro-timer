import { useCallback, useEffect, useReducer, useRef } from 'react'
import type { UseTimerActions, UseTimerState } from './useTimer.interface'
import type { Data } from '../context/modalContext.interface'

const initialState = {
   timerLength: 0,
   timeoutId: null,
   isRunning: false,
   activeTimer: 'pomodoro',
}

function reducer(state: UseTimerState, action: UseTimerActions) {
   switch (action.type) {
      case 'SET_INITIAL_TIMER_LENGTH':
         return { ...state, timerLength: action.amount }
      case 'SET_ACTIVE_TIMER':
         return { ...state, activeTimer: action.active }
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
   const [{ isRunning, timeoutId, timerLength, activeTimer }, dispatch] =
      useReducer(reducer, initialState)
   const currentTimerTotal = useRef<number | null>(null)

   const startTimer = () => {
      const time = setInterval(() => dispatch({ type: 'COUNT_DOWN' }), 1000)
      dispatch({ type: 'START_TIMER', timeOutId: time })
   }

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      dispatch({ type: 'END_TIMER' })
   }, [timeoutId])

   const setNewTimer = useCallback(
      (state: Data) => {
         const desiredAmount = state[activeTimer as keyof typeof state]
         dispatch({
            type: 'SET_INITIAL_TIMER_LENGTH',
            amount: desiredAmount * 60,
         })
         currentTimerTotal.current = desiredAmount
      },
      [currentTimerTotal, dispatch, activeTimer]
   )

   useEffect(() => {
      if (timerLength === 0) endTimer()
   }, [timerLength, endTimer])

   return {
      timerLength,
      isRunning,
      activeTimer,
      dispatch,
      startTimer,
      endTimer,
      setNewTimer,
      currentTimerTotal,
   }
}
