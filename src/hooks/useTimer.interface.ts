export interface UseTimerState {
   timerLength: number
   timeoutId: NodeJS.Timeout | null
   isRunning: boolean
   // 'pomodoro' | 'shortBreak' | 'longBreak' | null
   //  match strings!
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
