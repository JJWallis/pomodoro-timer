import { useState, useCallback, useEffect } from 'react'

export function useTimer() {
   const [timerLength, setTimerLength] = useState(10)
   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
   const [isRunning, setIsRunning] = useState(false)

   // Reducer in context or here?
   // local storage - checked to set default timerLength if present else 0
   // local storage - also for modal number inputs - one key + object for values within
   // update timerLength by apply btn - when clicked with pomodoro number (event callback)

   const startTimer = useCallback(() => {
      const time = setInterval(
         () => setTimerLength((previous) => previous - 1),
         1000
      )
      setTimeoutId(time)
      setIsRunning(true)
   }, [])

   useEffect(() => {
      if (timerLength === 0) timeoutId && clearInterval(timeoutId)
   }, [timerLength, timeoutId])

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      if (Number(timerLength) === 0) setTimerLength(10)
      //   not when paused
      setIsRunning(false)
   }, [timeoutId, timerLength])

   return { timerLength, setTimerLength, startTimer, endTimer, isRunning }
}
