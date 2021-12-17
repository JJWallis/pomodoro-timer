import { useState, useCallback } from 'react'

export function useTimer(startTime: number) {
   const [timerLength, setTimerLength] = useState(startTime ?? 1.0)
   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
   //    reducer - both change at same time

   const startTimer = useCallback(() => {
      const time = setInterval(() => setTimerLength(timerLength - 0.01), 1000)
      setTimeoutId(time)
   }, [timerLength])
}
