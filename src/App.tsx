import React, { FC } from 'react'
import { AppContainer } from './containers/Container.styled'
import Modal from './components/Modal'

interface Props {
   updateTheme: (newTheme: string) => void
}

const App: FC<Props> = ({ updateTheme }) => {
   // pass down update theme method via context (passed into here via props + pass into HOC via argument)
   // AppContext - passes down value obj in state (includes updateTheme method)
   return (
      <>
         <AppContainer>
            <Modal />
         </AppContainer>
      </>
   )
}

export default App
