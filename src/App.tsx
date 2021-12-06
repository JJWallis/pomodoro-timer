import React, { FC } from 'react'
import { AppContainer } from './containers/Container.styled'
import Modal from './components/Modal'
import { withTheme } from './components/withTheme'

const App: FC = () => {
   return (
      <>
         <AppContainer>
            <Modal />
         </AppContainer>
      </>
   )
}

export default withTheme(App)
