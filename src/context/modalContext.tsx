import React, { ComponentType, createContext, useState } from 'react'

interface Data {
   pomodoro: number
   shortbreak: number
   longbreak: number
}

type ModalContextData = {
   state: Data
   setState: React.Dispatch<React.SetStateAction<Data>>
}

type TestProvider = <T>(Component: ComponentType<T>) => ComponentType<T>

export const ModalContext = createContext<ModalContextData | null>(null)

export const withUserTest: TestProvider = (Component) => (props) => {
   const [state, setState] = useState<Data>({
      pomodoro: 1,
      shortbreak: 1,
      longbreak: 1,
   })

   const updateState = (timer: string, newState: number) => {
      if (newState > 0 && newState !== 0)
         setState({ ...state, [timer]: newState })
   }

   return (
      <ModalContext.Provider value={{ state, setState }}>
         <Component {...props} />
      </ModalContext.Provider>
   )
}
