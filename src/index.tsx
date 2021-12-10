import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './styles/Global.styled'
import { ThemeContext } from './components/withTheme'

ReactDOM.render(
   <StrictMode>
      <ThemeContext>
         <GlobalStyles />
         <App />
      </ThemeContext>
   </StrictMode>,

   document.getElementById('root')
)
