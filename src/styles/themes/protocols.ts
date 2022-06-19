/* eslint-disable no-unused-vars */
import {baseColors} from './baseColors';
import {fontWeight} from './fontWeight';

type BaseColors = typeof baseColors;
type FontWeight = typeof fontWeight;

export interface DefaultThemeProps {
    name: string;
    colors: {
        primary: string;
    }
    baseColors: BaseColors;
    fontWeight: FontWeight;
}

export enum themeColors {
    green = '#40C61E',
    pink = '#F20378'
}
