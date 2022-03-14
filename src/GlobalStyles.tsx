import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Fredoka', sans-serif;
        height: 100vh;
    }

    p {
        padding: 0.5rem;
        text-align: center;
    }
`;

export default GlobalStyles;