import React, { FC } from 'react'
import { AppContainer } from './containers/Container.styled'
import { Title } from './styles/Title.styled'
import Clock from './components/Clock'
import ModalToggle from './components/ModalToggle'
import Timers from './components/Timers'
import Modal from './components/Modal'
import { useToggle } from './hooks/useToggle'
import { TimerContextProvider } from './context/timerContext'

const App: FC = () => {
   const [isModalToggled, setIsModalToggled] = useToggle()

   return (
      <TimerContextProvider>
         <AppContainer>
            <Title>pomodoro</Title>
            <Timers />
            <Clock />
            <ModalToggle setIsModalToggled={setIsModalToggled} />
            <Modal
               setIsModalToggled={setIsModalToggled}
               isModalToggled={isModalToggled}
            />
         </AppContainer>
      </TimerContextProvider>
   )
}

export default App
