import 'styled-components';
import {DefaultThemeProps} from '../styles/themes/protocols';

declare module 'styled-components' {
    export interface DefaultTheme extends DefaultThemeProps {}
}
