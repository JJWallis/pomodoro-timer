import React, { ComponentType, createContext, useState } from 'react'

interface Data {
   pomodoro: string
   shortBreak: string
   longBreak: string
}

type ModalContextData = {
   state: Data
   setState: React.Dispatch<React.SetStateAction<Data>>
}

type TestProvider = <T>(Component: ComponentType<T>) => ComponentType<T>

export const ModalContext = createContext<ModalContextData | null>(null)

export const withUserTest: TestProvider = (Component) => (props) => {
   const [state, setState] = useState<Data>({
      pomodoro: '',
      shortBreak: '',
      longBreak: '',
   })

   // update state method

   return (
      <ModalContext.Provider value={{ state, setState }}>
         <Component {...props} />
      </ModalContext.Provider>
   )
}
