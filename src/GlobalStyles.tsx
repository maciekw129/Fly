import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Fredoka', sans-serif;
    }

`;

export default GlobalStyles;