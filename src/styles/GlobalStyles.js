import { createGlobalStyle } from 'styled-components'
import js1 from 'assets/img/js1.png'
import js2 from 'assets/img/js2.png'

const GlobalStyles = createGlobalStyle`

  .App {
    height: 100vh;
    width: 100%;
    /* display: flex; */
    --font-family: "Product Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    --primary-color: #14d9c4;
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

  /* Arengu Forms */
  .af-field-label label {
    padding: var(--input-padding);
    text-align: left;
    font-size: 1.2rem;
    font-weight: normal;
  }
  .af-choice-option input:checked+label:after, .af-legal input:checked+label:after {
    /* border-color: var(--primary-color) */
  }

  .af-field + .af-field {
    margin: 0;
    border-top: 1px solid whitesmoke;
    padding: 1.5em 0;
  }

  /* Específicos */
  .af-field-choice-aN93,
  .af-field-choice-iwFT {
    .af-field-hint {
      padding: var(--input-padding);
      text-align: left;
    }
  }

  .microlight {
    font-family : monospace;
    white-space : pre;
    background-color : #C4E4E8;
    color            : #052C36;   
    
    span:empty {
      width: 100%;
      display: block;
    }
  }
`

export default GlobalStyles