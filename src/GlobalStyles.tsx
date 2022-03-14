import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Fredoka', sans-serif;
        min-height: 100vh;
        position: relative;
    }

    p {
        padding: 0.5rem;
        text-align: center;
    }
`;

export default GlobalStyles;