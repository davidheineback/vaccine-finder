import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './themes/GlobalStyle.js'
import Theme from './themes/Theme.js'
import { ThemeProvider } from 'styled-components'
import App from './App/App'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
