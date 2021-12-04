import React, { createContext, ReactNode, useContext } from 'react'

interface ContextInterface {
   test: string
}

export const ModalContext = createContext<ContextInterface | null>(null)

export const ContextProvider = ({ children }: { children: ReactNode }) => {
   return (
      <ModalContext.Provider value={{ test: 'test' }}>
         {children}
      </ModalContext.Provider>
   )
}

// value into state/reducer  - solve some re-render issues? (react docs)

export function useModalContext() {
   const context = useContext(ModalContext)
   if (!context)
      throw new Error(
         'useModalContext must be used within a ModalContextProvider'
      )
   return context
}
