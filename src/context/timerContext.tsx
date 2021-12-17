import React, { createContext, ReactNode, useState } from 'react'
import { useTimer } from '../hooks/useTimer'
import { TimerContextData } from './timerContext.interface'

export const TimerContext = createContext<TimerContextData | null>(null)

export const TimerContextProvider = ({ children }: { children: ReactNode }) => {
   const [timer] = useState(useTimer())

   return (
      <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>
   )
}
