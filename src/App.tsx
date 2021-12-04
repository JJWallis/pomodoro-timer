import React, { FC } from 'react'
import GlobalStyles from './styles/Global.styled'
import { AppContainer, ModalContainer } from './containers/Container.styled'

const App: FC = () => {
   return (
      <>
         <GlobalStyles />
         <AppContainer>
            <ModalContainer />
         </AppContainer>
      </>
   )
}

export default App
