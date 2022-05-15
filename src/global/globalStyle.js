import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body { 
        font-size: 16px;
        -webkit-font-smoothing: antialiased !important;
        height: 100vh;
        font-family: var(--primary-font);
        background-color: #869dcf;
        overflow-x: hidden;
    }


    a {
        text-decoration: none;
        color: #000;
    }

    button {
        cursor: pointer;
        border: none;
    }

    .fade-enter {
      opacity: 0;
      transform:translateX(-100%) ;
      z-index: 1;
    }

    .fade-enter.fade-enter-active {
      opacity: 1;
      transform:translateX(0);
      transition: opacity 500ms, transform 500ms;
    }
    
    

    .nave {
      position: fixed;
      height: 35%;
      right: 0px;
      bottom: 0vh;
      margin-left: 10px;
      transform: translatey(0px);
      animation: float 2.5s infinite;
      z-index: -1;
    }

    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-10px);
      }
      100% {
        transform: translatey(0px);
      }
    }
`;

export default GlobalStyle;
