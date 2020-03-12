import { createGlobalStyle } from 'styled-components'
// import js1 from 'assets/img/js1.png'
// import js2 from 'assets/img/js2.png'

const GlobalStyles = createGlobalStyle`
  :root {
    --adalabBlueVeryDark: #099d8d;
    --adalabBlueDark: #099d8d;
    --adalabBlueMid: #0bb8a5;
    --adalabBlue: #14d9c4;
    --adalabBlueTrans: rgba(20,217,196,0.18);
    --adalabRedTrans: rgba(255,0,0,0.33);
  }
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

  .Marquee {
    /* background: var(--adalabBlue); */
    white-space: nowrap;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;

    h6 { color: inherit; }
  }

  .clock {
    &-container {
      --spacing: .7em;

      font-family: "Bangers", "Product Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      /* background-color: var(--adalabBlue); */
      /* box-shadow: inset 1px 1px 5px rgba(255,255,255,.15), 0 15px 90px 30px rgba(0,0,0,.25); */
      display: flex;
      justify-content: center;
      font-size: 70%;
      padding: var(--spacing) 0;

    }
    &-col {
      text-align: center;
      margin-right: var(--spacing);
      margin-left: var(--spacing);
      min-width: 4em;
      position: relative;
      &:not(:last-child):before,
      &:not(:last-child):after{
        content: "";
        background-color: rgba(255,255,255,.5);
        height: 3px;
        width: 3px;
        border-radius: 100%;
        display: block;
        position: absolute;
        right: -1em;
      }
      &:not(:last-child):before {
        top: 25%;
      }
      &:not(:last-child):after {
        top: 40%;
      }
    }
    
    &-timer {
      color: #fff;
      font-weight: medium;
      font-size: 2.618em;
      text-transform: uppercase;
      margin: 0;
    }
    &-label {
      font-family: var(--font-family);
      color: rgba(255,255,255,.85);
      text-transform: uppercase;
      font-size: 1em;
      margin-top: 2px;
      margin-bottom: 0;
    }
  }

  @media (max-width: 825px) {
    .clock-container {
      flex-direction: column;
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .clock-col {
      & + & {
        margin-top: 20px;
      }
      &:before,
      &:after {
        display: none!important;
      }
    }
  }

  .MuiStep-root {
    > * { transition: all .75s ease; }
    .Mui-disabled {
      opacity: .75;
      filter: saturate(0);
    }
  }

  /* // Anim! */
  @keyframes bounce {
    0% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    20% {
      transform: translateY(-45px);
      animation-timing-function: ease-out;
    }
    65% {
      transform: translateY(-12px);
      animation-timing-function: ease-out;
    }
    40%,
    75%,
    100% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
    }
  }

  .ada.win {
    animation: bounce 1s infinite;
  }

  .fader {
    transition: opacity 1s ease;
    &.fade {
      opacity: 0;
    }
  }

  .demoMode {
    background: linear-gradient(270deg, var(--adalabBlue), var(--adalabRedTrans));
    background-size: 400% 400%;
    animation: DemoMode 10s ease infinite;
  }


  .nonDemoMode {
    background: linear-gradient(270deg, var(--adalabBlueMid), var(--adalabBlue));
    background-size: 400% 400%;
    animation: DemoMode 30s ease infinite;
  }

  @keyframes DemoMode {
      0% { background-position: 0% 50% }
      50% { background-position: 100% 50% }
      100% { background-position: 0% 50% }
  }
`

export default GlobalStyles