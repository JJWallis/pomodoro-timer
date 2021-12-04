import React, { FC } from 'react'
import GlobalStyles from './styles/Global.styled'
import { ModalWrapper } from './containers/ModalWrapper.styled'

const App: FC = () => {
   return (
      <>
         <GlobalStyles />
         <ModalWrapper></ModalWrapper>
      </>
   )
}

export default App
