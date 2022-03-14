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

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;
    }

    p {
        padding: 0.5rem;
        text-align: center;
    }
`;

export default GlobalStyles;