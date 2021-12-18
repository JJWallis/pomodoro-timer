import { useState, useCallback, useEffect } from 'react'

export function useTimer() {
   const [timerLength, setTimerLength] = useState(10)
   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
   const [isRunning, setIsRunning] = useState(false)

   // change naming in modalContext (generic state value)
   // Reducer in context or here?

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
      // check if isRunning === 'pomodoro'
      // if so use prevTimerRef.current to set timerLength
      // diff useEffect - isRunning dependancy?
      // not going to work!
   }, [timerLength, timeoutId])

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      if (Number(timerLength) === 0) setTimerLength(10)
      //   not when paused
      setIsRunning(false)
   }, [timeoutId, timerLength])

   return { timerLength, setTimerLength, startTimer, endTimer, isRunning }
}
