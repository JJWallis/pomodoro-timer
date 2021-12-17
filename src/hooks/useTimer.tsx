import { useState, useCallback } from 'react'

export function useTimer() {
   const [timerLength, setTimerLength] = useState(1.0)
   //  localStorage hook above - if local storage value present uses it
   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
   const [isRunning, setIsRunning] = useState(false)
   //    reducer - multiple changing at same time

   const startTimer = useCallback(() => {
      const time = setInterval(
         () => setTimerLength((prevTime) => prevTime - 0.01),
         1000
      )
      setTimeoutId(time)
      setIsRunning(true)
   }, [])

   //    const pauseTimer = () => {
   //       setIsRunning(false)
   //    }

   //    const resumeTimer = () => {
   //       setIsRunning(false)
   //    }

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      setTimerLength(1.0)
      //   dont need this - return method above
   }, [timeoutId])

   return { timerLength, setTimerLength, startTimer, endTimer, isRunning }
}
