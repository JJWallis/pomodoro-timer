import React, { createContext, ReactNode } from 'react'

type ContextType = null

export const TimerContext = createContext<ContextType>(null)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
   return (
      <TimerContext.Provider value={context}>{children}</TimerContext.Provider>
   )
}
