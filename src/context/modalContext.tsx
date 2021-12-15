import React, { ComponentType, createContext, useState } from 'react'

interface Data {
   pomodoro: number
   shortbreak: number
   longbreak: number
}

export type ModalContextData = {
   state: Data
   updateState: (timer: string, newState: number) => void
}

type ModalContextProvider = <T>(Component: ComponentType<T>) => ComponentType<T>

export const ModalContext = createContext<ModalContextData | null>(null)

export const withModalContext: ModalContextProvider =
   (Component) => (props) => {
      const [state, setState] = useState({
         pomodoro: 1,
         shortbreak: 1,
         longbreak: 1,
      })

      const updateState = (timer: string, newState: number) => {
         if (newState > 0 && newState !== 0)
            setState({ ...state, [timer]: newState })
      }

      return (
         <ModalContext.Provider value={{ state, updateState }}>
            <Component {...props} />
         </ModalContext.Provider>
      )
   }
