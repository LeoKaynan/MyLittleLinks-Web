import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    /* Logo */
    svg {
        margin-bottom: 30px;
    }

    /* BlurLogo */
    div {
        position: absolute;
        top: 0;
        z-index: -1;
    }

    /* Junte seus melhores links em um único lugar. */
    h1 {
        text-align: center;
        color: white;

        span {
            text-decoration: underline;
            font-weight: ${({theme}) => theme.fontWeight.thin};
        }
    }

     /* mantetenha todos conectados a você. */
    h3 {
        text-align: center;
        color: ${({theme}) => theme.baseColors.lightBlue};
        margin-top: 10px;

        span {
            color: ${({theme}) => theme.baseColors.white};
        }
    }
`;
