import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: ${({theme}) => theme.colors.primary};
        --darkBlue: #101529;
        --softPink: #FC9B94;
        --blue: #2181E8;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 85.5%;
        }
    }

    body {
        background-color: var(--darkBlue);
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;