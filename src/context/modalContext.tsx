import React, { createContext, useReducer, Dispatch, useEffect } from 'react'
import {
   Data,
   ModalActions,
   WithModalContext,
   ModalStateKeys,
} from './modalContext.interface'

export const ModalContext = createContext<Data | null>(null)
export const ModalContextDispatch =
   createContext<Dispatch<ModalActions> | null>(null)

const initialState = {
   pomodoro: 1,
   shortbreak: 5,
   longbreak: 15,
}

const retrieveState = (): Data => {
   const state = localStorage.getItem('modalState')
   return state ? JSON.parse(state) : initialState
}

const reducer = (state: Data, action: ModalActions) => {
   const { type, timer } = action
   switch (type) {
      case 'UPDATE_TIMER': {
         return { ...state, [timer]: action.amount }
      }
      case 'INCREMENT_TIMER': {
         return { ...state, [timer]: state[timer as ModalStateKeys] + 1 }
      }
      case 'DECREMENT_TIMER': {
         const curr = state[timer as ModalStateKeys]
         if (curr === 1) return state
         return { ...state, [timer]: curr - 1 }
      }
      default: {
         return state
      }
   }
}

export const withModalContext: WithModalContext = (Component) => (props) => {
   const [modalState, dispatch] = useReducer(
      reducer,
      initialState,
      retrieveState
   )

   useEffect(() => {
      localStorage.setItem('modalState', JSON.stringify(modalState))
   }, [modalState])

   return (
      <ModalContext.Provider value={modalState}>
         <ModalContextDispatch.Provider value={dispatch}>
            <Component {...props} />
         </ModalContextDispatch.Provider>
      </ModalContext.Provider>
   )
}
