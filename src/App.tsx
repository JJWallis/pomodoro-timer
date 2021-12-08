import React, { FC, useReducer } from 'react'
import { AppContainer } from './containers/Container.styled'
import Modal from './components/Modal'

type ReducerState = number
type ReducerActions =
   | {
        type: 'INCREMENT'
        payload: number
     }
   | {
        type: 'DECREMENT'
        payload: number
     }

const timerReducer = (state: ReducerState, action: ReducerActions) => {
   const { type, payload } = action
   switch (type) {
      case 'INCREMENT':
         return state + payload
      case 'DECREMENT':
         return state - payload
      default:
         return state
   }
}

const App: FC = () => {
   const [amount, dispatch] = useReducer(timerReducer, 500)

   return (
      <>
         <AppContainer>
            <Modal />
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>
               Increment
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>
               Decrement
            </button>
            <div>{amount}</div>
         </AppContainer>
      </>
   )
}

export default App
