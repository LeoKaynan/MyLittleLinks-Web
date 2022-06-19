import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
        background-color: ${({theme}) => theme.baseColors.blueDark};
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: ${({theme}) => theme.fontWeight.regular};
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: ${({theme}) => theme.fontWeight.semiBold};
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
