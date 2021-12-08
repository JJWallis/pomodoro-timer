import React, { FC, useReducer } from 'react'
import { AppContainer } from './containers/Container.styled'
import Modal from './components/Modal'

type TimerState = number
type Actions =
   | {
        type: 'INCREMENT'
        payload: number
     }
   | {
        type: 'DECREMENT'
        payload: number
     }

const timerReducer = (state: TimerState, action: Actions) => {
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
            <button>Decrement</button>
            <div>{amount}</div>
         </AppContainer>
      </>
   )
}

export default App
