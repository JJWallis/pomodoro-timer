export interface UseTimerState {
   timerLength: number
   timeoutId: NodeJS.Timeout | null
   isRunning: boolean
}

export type UseTimerActions =
   | {
        type: 'SET_INITIAL_TIMER_LENGTH'
        amount: number
     }
   | {
        type: 'START_TIMER'
        timeOutId: NodeJS.Timeout
     }
   | {
        type: 'COUNT_DOWN'
     }
   | {
        type: 'END_TIMER'
     }

export type PreviousTimer = {
   timer: string
   amount: number | null
} | null
