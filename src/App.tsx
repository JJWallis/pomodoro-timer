import React, { FC } from 'react'
import { AppContainer } from './containers/Container.styled'
import { Title } from './styles/Title.styled'
import Modal from './components/Modal'

const App: FC = () => {
   return (
      <>
         <AppContainer>
            <Title>pomodoro</Title>
            <Modal />
         </AppContainer>
      </>
   )
}

export default App
