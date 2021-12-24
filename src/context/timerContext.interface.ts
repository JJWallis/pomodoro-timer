import { UseTimerActions, PreviousTimer } from '../hooks/useTimer.interface'

export interface TimerContextData {
   timerLength: number
   dispatch: React.Dispatch<UseTimerActions>
   startTimer: () => void
   endTimer: () => void
   isRunning: boolean
   prevTimer: React.MutableRefObject<PreviousTimer>
   currentTimerTotal: React.MutableRefObject<number | null>
   formatTimer: (leftSeconds: number) => string
}
