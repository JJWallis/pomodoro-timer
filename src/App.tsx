import React, { FC, useReducer } from 'react'
import { AppContainer } from './containers/Container.styled'
import Modal from './components/Modal'

// const reducer = (state, action) => {
//    switch (action.type) {
//       case 'deposit':
//          return state + action.payload
//       case 'withdraw':
//          return state - action.payload
//       default:
//          return state
//    }
// }

const App: FC = () => {
   // const deposit = (amount) => {
   //    // if (amount.isFinite()) validation is desired
   //    dispatch({ type: 'deposit', payload: amount })
   // }

   // const [amount, dispatch] = useReducer(reducer, 500)

   return (
      <>
         <AppContainer>
            <Modal />
            {/* <button onClick={() => deposit(500)}></button> */}
         </AppContainer>
      </>
   )
}

export default App
