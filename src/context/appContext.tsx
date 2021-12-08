import React, { createContext, ReactNode, useContext, useState } from 'react'

type ContextType = { updateTheme?: () => void } | null

const AppContext = createContext<ContextType>(null)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
   const [context, setContext] = useState<{} | null>({})
   return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export function useAppContext() {
   const context = useContext(AppContext)
   if (!context)
      throw new Error('useAppContext must be used within a AppContextProvider')
   return context
}
