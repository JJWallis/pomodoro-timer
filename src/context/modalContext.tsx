import React, { createContext, useState } from 'react'
import {
   ModalContextData,
   ModalContextProvider,
} from './modalContext.interface'

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
