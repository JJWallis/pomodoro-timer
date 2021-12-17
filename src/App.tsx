import React, { FC } from 'react'
import { AppContainer } from './containers/Container.styled'
import { Title } from './styles/Title.styled'
import Clock from './components/Clock'
import ModalToggle from './components/ModalToggle'
import Timers from './components/Timers'
import Modal from './components/Modal'
import { useToggle } from './hooks/useToggle'
import { useTimer } from './hooks/useTimer'

const App: FC = () => {
   const [isModalToggled, setIsModalToggled] = useToggle()
   const { timerLength, setTimerLength, startTimer, endTimer, isRunning } =
      useTimer()

   return (
      <AppContainer>
         <Title>pomodoro</Title>
         <Timers />
         <Clock
            timerLength={timerLength}
            isRunning={isRunning}
            startTimer={startTimer}
            endTimer={endTimer}
         />
         <ModalToggle setIsModalToggled={setIsModalToggled} />
         <Modal
            setIsModalToggled={setIsModalToggled}
            isModalToggled={isModalToggled}
         />
      </AppContainer>
   )
}

export default App
