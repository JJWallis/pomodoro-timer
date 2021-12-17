export interface TimerContextData {
   timerLength: number
   setTimerLength: React.Dispatch<React.SetStateAction<number>>
   startTimer: () => void
   endTimer: () => void
   isRunning: boolean
}
