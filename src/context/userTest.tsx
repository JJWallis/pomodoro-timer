import React, { ComponentType, createContext, FC } from 'react'

interface Props {
   test: string
}

export const Context = createContext<Props | null>(null)

type TestProvider = <T>(Component: ComponentType<T>) => FC<T>

export const withUserTest: TestProvider = (Component) => (props) => {
   return (
      <Context.Provider value={{ test: 'this is a test!' }}>
         <Component {...props} />
      </Context.Provider>
   )
}
