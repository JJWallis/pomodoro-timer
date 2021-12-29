import { UseTimerActions } from '../hooks/useTimer.interface'

export interface TimerContextData {
   timerLength: number
   dispatch: React.Dispatch<UseTimerActions>
   startTimer: () => void
   endTimer: () => void
   isRunning: boolean
   activeTimer: string
   currentTimerTotal: React.MutableRefObject<number | null>
   formatTimer: (leftSeconds: number) => string
   setNewTimer: (state: any) => void
}
