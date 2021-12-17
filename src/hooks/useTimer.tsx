import { useState, useCallback } from 'react'

export function useTimer() {
   const [timerLength, setTimerLength] = useState('1.00')
   //  localStorage hook above - if local storage value present uses it
   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
   const [isRunning, setIsRunning] = useState(false)
   //    reducer - multiple changing at same time

   const startTimer = useCallback(() => {
      const time = setInterval(
         () =>
            setTimerLength((prevTime) => {
               const num = Number(prevTime) - 0.01
               return num.toString()
            }),
         1000
      )
      setTimeoutId(time)
      setIsRunning(true)
   }, [])

   const endTimer = useCallback(() => {
      timeoutId && clearInterval(timeoutId)
      if (Number(timerLength) === 0) setTimerLength('1.00')
      //   when pause timer - don't want to reset it
      //   kill timer immediately?
   }, [timeoutId, timerLength])

   return { timerLength, setTimerLength, startTimer, endTimer, isRunning }
}
