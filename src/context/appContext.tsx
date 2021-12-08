import React, { createContext, ReactNode, useContext } from 'react'

type ContextType = string

const ModalContext = createContext<ContextType | null>(null)

export const ContextProvider = ({ children }: { children: ReactNode }) => {
   return (
      <ModalContext.Provider value={'test'}>{children}</ModalContext.Provider>
   )
}

export function useModalContext() {
   const context = useContext(ModalContext)
   if (!context)
      throw new Error(
         'useModalContext must be used within a ModalContextProvider'
      )
   return context
}
