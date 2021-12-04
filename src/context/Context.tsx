import React, { createContext, ReactNode } from 'react'

interface ContextInterface {
   test: string
}

export const Context = createContext<ContextInterface | null>(null)

export const ContextProvider = (children: ReactNode) => {
   return (
      <Context.Provider value={{ test: 'test' }}>{children}</Context.Provider>
   )
}
