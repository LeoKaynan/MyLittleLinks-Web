import type {NextPage} from 'next';
import {Header} from '../components/Header';
import {Container, Content} from './styled';

const Home: NextPage = () => {
    return (
        <Container>
            <div>
                <Content>
                    <Header />
                </Content>
            </div>
            <div>
                <Content>Content Right</Content>
            </div>
        </Container>
    );
};

export default Home;
