// Globalstyle component

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  body{
    background: linear-gradient(290deg, rgba(148,187,233,0.8813726174063375) 11%, rgba(174,238,181,0.9009804605435925) 100%); 
  }
  `

export default GlobalStyle
