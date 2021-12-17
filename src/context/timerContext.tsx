import React, { createContext, ReactNode, useState } from 'react'
import { useTimer } from '../hooks/useTimer'

type ContextType = null

export const TimerContext = createContext<ContextType>(null)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
   const [data] = useState(useTimer())

   return <TimerContext.Provider value={null}>{children}</TimerContext.Provider>
}
