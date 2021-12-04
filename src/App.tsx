import React, { FC } from 'react'
import GlobalStyles from './styles/Global.styled'
import { AppContainer } from './containers/Container.styled'
import Modal from './components/Modal'
import { useModalContext } from './context/Context'

const App: FC = () => {
   const context = useModalContext()
   console.log(context)
   return (
      <>
         <GlobalStyles />
         <AppContainer>
            <Modal />
         </AppContainer>
      </>
   )
}

export default App

// timer HOC
