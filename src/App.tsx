import React, { FC } from 'react'
import { AppContainer } from './containers/AppContainer.styled'
import { TimerContextProvider } from './context/timerContext'
import { withModalContext } from './context/modalContext'
import { useToggle } from './hooks/useToggle'
import { Logo } from './styles/Image.styled'
import LogoImg from './assets/logo.svg'
import Clock from './components/Clock'
import ModalToggle from './components/ModalToggle'
import Timers from './components/Timers'
import Modal from './components/Modal'

const App: FC = () => {
   const [isModalToggled, setIsModalToggled] = useToggle()

   return (
      <TimerContextProvider>
         <AppContainer isModalToggled={isModalToggled}>
            <Logo src={LogoImg} alt="" />
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

export default withModalContext(App)
