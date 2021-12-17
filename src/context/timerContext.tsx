import React, { createContext, ReactNode } from 'react'
import { useTimer } from '../hooks/useTimer'
import { TimerContextData } from './timerContext.interface'

export const TimerContext = createContext<TimerContextData | null>(null)

export const TimerContextProvider = ({ children }: { children: ReactNode }) => {
   return (
      <TimerContext.Provider value={useTimer()}>
         {children}
      </TimerContext.Provider>
   )
}
