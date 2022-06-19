import {baseColors} from './baseColors';
import {fontWeight} from './fontWeight';
import {DefaultThemeProps, themeColors} from './protocols';

export const themeColor = (color: keyof typeof themeColors): DefaultThemeProps => {
    return {
        name: color,
        colors: {
            primary: themeColors[color],
        },
        baseColors,
        fontWeight,
    };
};

