import { useState, useCallback, useEffect } from 'react'

export function useTimer() {
   const [timerLength, setTimerLength] = useState(10)
   //  localStorage hook above - if local storage value present uses it
   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
   const [isRunning, setIsRunning] = useState(false)
   //    reducer - multiple changing at same time

   const startTimer = useCallback(() => {
      const time = setInterval(
         () => setTimerLength((previous) => previous - 1),
         1000
      )
      setTimeoutId(time)
      setIsRunning(true)
   }, [])

   useEffect(() => {
      if (timerLength === 0)
         clearInterval(timeoutId?.valueOf() as NodeJS.Timeout)
   }, [timerLength, timeoutId])

   const endTimer = useCallback(() => {
      clearInterval(timeoutId?.valueOf() as NodeJS.Timeout)
      if (Number(timerLength) === 0) setTimerLength(10)
      //   not when paused
      setIsRunning(false)
   }, [timeoutId, timerLength])

   return { timerLength, setTimerLength, startTimer, endTimer, isRunning }
}
