import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`

  .App {
    height: 100vh;
    width: 100%;
    /* display: flex; */
  }

  .SvgIcon {
    width: 100% !important;
    height: 100% !important;
  }

  a {
    text-decoration: none;
    color: inherit;
    border: none;
  }
`

export default GlobalStyles