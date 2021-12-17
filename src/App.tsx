import React, { FC } from 'react'
import { AppContainer } from './containers/Container.styled'
import { Title } from './styles/Title.styled'
import Clock from './components/Clock'
import ModalToggle from './components/ModalToggle'
import Timers from './components/Timers'
import Modal from './components/Modal'
import { useToggle } from './hooks/useToggle'

const App: FC = () => {
   const { isToggled, handleChange } = useToggle()

   return (
      <>
         <AppContainer>
            <Title>pomodoro</Title>
            <Timers />
            <Clock />
            <ModalToggle handleChange={handleChange} />
            <Modal />
         </AppContainer>
      </>
   )
}

export default App
