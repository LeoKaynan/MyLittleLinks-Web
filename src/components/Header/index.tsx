import {Container} from './styled';
import Logo from '../../assets/logo.svg';
import BlurLogo from '../../assets/BlurLogo.svg';

export const Header = () => {
    return (
        <Container>
            <Logo width={250} />
            <div><BlurLogo width={500} /></div>
            <h1>
                Junte seus melhores {' '}
                <span>links</span> em um único lugar.
            </h1>
            <h3>mantetenha todos <span>conectados</span> a você.</h3>
        </Container>
    );
};
