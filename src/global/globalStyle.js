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
    }


    a {
        text-decoration: none;
        color: #000;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;

export default GlobalStyle;
