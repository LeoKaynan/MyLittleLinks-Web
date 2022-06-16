import type {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import pinkTheme from '../styles/themes/pink';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={pinkTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
