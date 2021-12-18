import { useState, useCallback } from 'react'

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

   //    useEffect() - if timerLength === 0 - kill timer

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      if (Number(timerLength) === 0) setTimerLength(10)
      //   when pause timer - don't want to reset it
      setIsRunning(false)
   }, [timeoutId, timerLength])

   return { timerLength, setTimerLength, startTimer, endTimer, isRunning }
}
