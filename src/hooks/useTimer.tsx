import { useState, useCallback } from 'react'

export function useTimer(startTime: number) {
   const [timerLength, setTimerLength] = useState(startTime ?? 1.0)
   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
   //    reducer - both change at same time

   const startTimer = useCallback(() => {
      const time = setInterval(
         () => setTimerLength((prevTime) => prevTime - 0.01),
         1000
      )
      setTimeoutId(time)
   }, [])

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      setTimerLength(1.0)
      //   dont need this - return method above
   }, [timeoutId])

   return { timerLength, setTimerLength, startTimer, endTimer }
}
