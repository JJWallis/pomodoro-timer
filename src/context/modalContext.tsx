import React, { createContext, useState } from 'react'
import {
   ModalContextData,
   ModalContextProvider,
} from './modalContext.interface'

export const ModalContext = createContext<ModalContextData | null>(null)

export const withModalContext: ModalContextProvider =
   (Component) => (props) => {
      const [state, setState] = useState({
         pomodoro: 25,
         shortbreak: 5,
         longbreak: 15,
      })

      const updateState = (timer: string, newState: number) => {
         if (newState) setState({ ...state, [timer]: newState })
      }

      return (
         <ModalContext.Provider value={{ state, updateState }}>
            <Component {...props} />
         </ModalContext.Provider>
      )
   }
