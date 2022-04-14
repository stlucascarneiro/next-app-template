import { ThemeTypes } from "_config/theme";

class BaseNeutral {
    public static readonly light = {
        900: '#1A202C',
        800: '#171923',
        700: '#2D3748',
        600: '#4A5568',
        500: '#718096',
        400: '#A0AEC0',
        300: '#CBD5E0',
        200: '#E2E8F0',
        100: '#EDF2F7',
        50: '#F7FAFC',
    }
    public static readonly dark = {
        900: '#F7FAFC',
        800: '#EDF2F7',
        700: '#E2E8F0',
        600: '#CBD5E0',
        500: '#A0AEC0',
        400: '#718096',
        300: '#4A5568',
        200: '#2D3748',
        100: '#171923',
        50: '#1A202C',
    }
}

export class Color {
    public readonly neutral;
    public readonly background;
    public readonly elements;
    public readonly feedback;

    constructor(theme: ThemeTypes) {
        this.neutral = BaseNeutral[theme];
        this.background = {
            strong: BaseNeutral[theme][700],
            light: BaseNeutral[theme][50],
            black: '#000',
            white: '#FFF',
            primary: '#CBD5E0',
            secondary: '#2B6CB0',
        }
        this.elements = {
            light: BaseNeutral[theme][200],
            desable: BaseNeutral[theme][400],
            regular: BaseNeutral[theme][600],
            strong: BaseNeutral[theme][800],
            white: '#FFF',
            black: '#000',
        }
        this.feedback = {
            success: '#00B894',
            warning: '#F0AD4E',
            error: '#D63031',
        }
    }
}