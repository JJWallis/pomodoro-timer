export interface UseTimerState {
   timerLength: number
   timeoutId: NodeJS.Timeout | null
   isRunning: boolean
   activeTimer: string
}

export type UseTimerActions =
   | {
        type: 'SET_INITIAL_TIMER_LENGTH'
        amount: number
     }
   | {
        type: 'SET_ACTIVE_TIMER'
        active: string
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
