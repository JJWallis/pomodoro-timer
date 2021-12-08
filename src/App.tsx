import React, { FC } from 'react'
import { AppContainer } from './containers/Container.styled'
import Modal from './components/Modal'

interface Props {
   updateTheme?: (newTheme: string) => void
}

const App: FC<Props> = ({ updateTheme }) => {
   // pass down update theme method via context (passed into here via props + pass into HOC via argument)
   // AppContext - passes down value obj in state (includes updateTheme method)
   // refactor useTheme into Context folder
   return (
      <>
         <AppContainer>
            <Modal />
         </AppContainer>
      </>
   )
}

export default App
