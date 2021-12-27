import React, { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import {
   ModalContextData,
   ModalContextProvider,
} from './modalContext.interface'

export const ModalContext = createContext<ModalContextData | null>(null)

export const withModalContext: ModalContextProvider =
   (Component) => (props) => {
      const [state, setState] = useLocalStorage('TIMERS', {
         pomodoro: 1,
         shortbreak: 5,
         longbreak: 15,
      })

      const updateState = (timer: string, newState: number) => {
         setState({ ...state, [timer]: newState })
      }

      const incremenet = (timer: string): void => {
         setState({ ...state, [timer]: state[timer] + 1 })
      }

      const decremement = (timer: string): void => {
         if (state[timer] === 1) return
         setState({ ...state, [timer]: state[timer] - 1 })
      }

      return (
         <ModalContext.Provider
            value={{ state, updateState, incremenet, decremement }}
         >
            <Component {...props} />
         </ModalContext.Provider>
      )
   }
