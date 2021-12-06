import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './styles/Global.styled'
import { withTheme } from './components/withTheme'
const AppWithTheme = withTheme(App)

ReactDOM.render(
   <StrictMode>
      <GlobalStyles />
      <AppWithTheme />
   </StrictMode>,

   document.getElementById('root')
)
