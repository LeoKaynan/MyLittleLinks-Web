import type {NextPage} from 'next';
import {GlobalStyle} from '../styles/global';

const Home: NextPage = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <GlobalStyle />
        </>
    );
};

export default Home;
