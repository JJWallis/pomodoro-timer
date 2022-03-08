import React, { createContext, useReducer } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import {
   ModalContextData,
   ModalContextProvider,
} from './modalContext.interface'

export const ModalContext = createContext<ModalContextData | null>(null)

const initialState = {
   pomodoro: 1,
   shortbreak: 5,
   longbreak: 15,
}

const reducer = (state, action) => {
   const { type, amount, timer } = action
   switch (type) {
      case 'UPDATE_TIMER': {
         return { ...state, [timer]: amount }
      }
      case 'INCREMENT_TIMER': {
         return { ...state, [timer]: state[timer] + 1 }
      }
      case 'DECREMENT_TIMER': {
         return { ...state, [timer]: state[timer] - 1 }
      }
      default: {
         return state
      }
   }
}

export const withModalContext: ModalContextProvider =
   (Component) => (props) => {
      const [state, setState] = useLocalStorage('TIMERS', {
         pomodoro: 1,
         shortbreak: 5,
         longbreak: 15,
      })

      const [modalState, dispatch] = useReducer(reducer, initialState)

      const updateState = (timer: string, newState: number) => {
         setState({ ...state, [timer]: newState })
      }

      const incremenet = (timer: string) => {
         setState({ ...state, [timer]: state[timer] + 1 })
      }

      const decremement = (timer: string) => {
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
