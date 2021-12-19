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
         timerLength: 10,
         // dont hardcode
         timeoutId: null,
         isRunning: false,
      }
   )
   const prevTimer = useRef<PreviousTimer>({ timer: 'pomodoro', amount: null })
   // set amount to timerLength state when dynamic

   const startTimer = useCallback(() => {
      const time = setInterval(() => dispatch({ type: 'COUNT_DOWN' }), 1000)
      dispatch({ type: 'START_TIMER', timeOutId: time })
   }, [])

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      dispatch({ type: 'END_TIMER' })
   }, [timeoutId])

   useEffect(() => {
      if (timerLength === 0) endTimer()
   }, [timerLength, endTimer])

   return { timerLength, isRunning, dispatch, startTimer, endTimer, prevTimer }
}

// tick = () => {
//    if (this.state.isRunning) {
//        const now = Date.now()
//        this.setState(prevState => ({
//            previousTime: now,
//            elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
//        }))
//    }
// }

// on clock btn Click:
// if (!this.state.isRunning) {
// this.setState(
//  { previousTime: Date.now() }

// handleReset = () => {
// this.setState({ elapsedTime: 0 })
// }

// const seconds = Math.floor(this.state.elapsedTime / 1000)
// componentDidMount() { this.intervalID = setInterval(() => this.tick(), 100) }
