import React, { FC } from 'react'
import { AppContainer } from './containers/Container.styled'
import Modal from './components/Modal'

export type updateTheme = (newTheme: string) => void

const App: FC = () => {
   return (
      <>
         <AppContainer>
            <Modal />
         </AppContainer>
      </>
   )
}

export default App
