import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > div:first-child {
        display: flex;
        justify-content: flex-end;
    }
`;

export const Content = styled.div`
    max-width: 400px;
`;
