import React, { FC } from 'react'
import { AppContainer } from './containers/Container.styled'
import { Title } from './styles/Title.styled'
import Clock from './components/Clock'
import ModalToggle from './components/ModalToggle'
import Timers from './components/Timers'
import Modal from './components/Modal'

const App: FC = () => {
   return (
      <>
         <AppContainer>
            <Title>pomodoro</Title>
            <Timers />
            <Clock />
            <ModalToggle />
            <Modal />
         </AppContainer>
      </>
   )
}

export default App
