import React, { FC } from 'react'
import { AppContainer } from './containers/AppContainer.styled'
import { TimerContextProvider } from './context/timerContext'
import { withModalContext } from './context/modalContext'
import { useToggle } from './hooks/useToggle'
import { Logo } from './styles/Image.styled'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
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
            <ErrorBoundary FallbackComponent={ErrorFallback}>
               <Timers />
               <Clock />
               <ModalToggle
                  isModalToggled={isModalToggled}
                  setIsModalToggled={setIsModalToggled}
               />
               <Modal
                  setIsModalToggled={setIsModalToggled}
                  isModalToggled={isModalToggled}
               />
            </ErrorBoundary>
         </AppContainer>
      </TimerContextProvider>
   )
}

export default withModalContext(App)
