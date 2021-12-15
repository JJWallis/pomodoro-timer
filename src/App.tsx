import React, { FC } from 'react'
import { AppContainer } from './containers/Container.styled'
import { Title } from './styles/Title.styled'
import Timers from './components/Timers'
import Modal from './components/Modal'

const App: FC = () => {
   return (
      <>
         <AppContainer>
            <Title>pomodoro</Title>
            <Timers />
            <Modal />
            {/* clock */}
         </AppContainer>
      </>
   )
}

export default App
