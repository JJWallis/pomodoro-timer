import { useState, useCallback, useEffect, useReducer } from 'react'

interface State {
   timerLength: number
   timeoutId: NodeJS.Timeout | null
   isRunning: boolean
   // 'pomodoro' | 'shortBreak' | 'longBreak' | null
   //  match strings with either key or state name
}

type Actions =
   | {
        type: 'SET_INITIAL_TIMER_LENGTH'
        amount: number
     }
   | {
        type: 'START_TIMER'
        timeOutId: NodeJS.Timeout
     }

const ACTIONS = {
   SET_INITIAL_TIMER_LENGTH: 'SET_INITIAL_TIMER_LENGTH',
   START_TIMER: 'START_TIMER',
}

function reducer(state: State, action: Actions) {
   switch (action.type) {
      case ACTIONS.SET_INITIAL_TIMER_LENGTH:
         return { ...state, timerLength: action.amount }
      case ACTIONS.START_TIMER:
         return { ...state, timeoutId: action.timeOutId, isRunning: true }
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
      if (Number(timerLength) === 0) setTimerLength(10)
      //   not when paused - move to useEffect below
      setIsRunning(false)
   }, [timeoutId, timerLength])

   useEffect(() => {
      if (timerLength === 0) timeoutId && clearInterval(timeoutId)
      // sep callback func when 'break' btn clicked (or any of these btns?)
      // check if isRunning === 'pomodoro'
      // if so sets prevTimerRef.current to current timerLength + updates timerLength with new state (one dispatch)
      // if pomodoro btn hit - first check if prevTimerRef.current is thruthy
      // reset this ref somewhere - if click pomodoro btn while main timer running will reset it
   }, [timerLength, timeoutId])

   return { timerLength, setTimerLength, startTimer, endTimer, isRunning }
}
