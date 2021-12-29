import { UseTimerActions } from '../hooks/useTimer.interface'
import { Data } from './modalContext.interface'

export interface TimerContextData {
   timerLength: number
   dispatch: React.Dispatch<UseTimerActions>
   startTimer: () => void
   endTimer: () => void
   isRunning: boolean
   activeTimer: string
   currentTimerTotal: React.MutableRefObject<number | null>
   setNewTimer: (state: Data) => void
}
