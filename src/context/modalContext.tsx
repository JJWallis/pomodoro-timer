import React, { createContext, useState } from 'react'
import {
   ModalContextData,
   ModalContextProvider,
} from './modalContext.interface'

export const ModalContext = createContext<ModalContextData | null>(null)

export const withModalContext: ModalContextProvider =
   (Component) => (props) => {
      const [state, setState] = useState({
         pomodoro: 99,
         shortbreak: 10,
         longbreak: 20,
      })

      const updateState = (timer: string, newState: number) => {
         if (newState && newState < 100)
            setState({ ...state, [timer]: newState })
      }

      return (
         <ModalContext.Provider value={{ state, updateState }}>
            <Component {...props} />
         </ModalContext.Provider>
      )
   }
