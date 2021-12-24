import React, { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import {
   ModalContextData,
   ModalContextProvider,
} from './modalContext.interface'

export const ModalContext = createContext<ModalContextData | null>(null)

export const withModalContext: ModalContextProvider =
   (Component) => (props) => {
      const [state, setState] = useLocalStorage('inputs', {
         pomodoro: 1,
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
