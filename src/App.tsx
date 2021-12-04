import React, { FC } from 'react'
import GlobalStyles from './styles/Global.styled'
import { AppContainer } from './containers/Container.styled'
import Modal from './components/Modal'

const App: FC = () => {
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
