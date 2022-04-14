import { Devices } from '_config/device/types'

interface ITypography {
    size: string,
    weight: number
}

class BaseTypography {
    public static readonly desktop = {
        h1: {
            size: '24px',
            weight: 700,
        },
        h2: {
            size: '18px',
            weight: 600,
        },
        h3: {
            size: '16px',
            weight: 500,
        },
        h4: {
            size: '14px',
            weight: 600,
        },
        h5: {
            size: '12px',
            weight: 600,
        },
        navigation: {
            size: '13px',
            weight: 500,
        },
        label: {
            size: '12px',
            weight: 600,
        },
        text: {
            size: '12px',
            weight: 400,
        },
        text_sm: {
            size: '1px',
            weight: 400,
        }
    }
    public static readonly mobile = {
        h1: {
            size: '24px',
            weight: 700,
        },
        h2: {
            size: '18px',
            weight: 600,
        },
        h3: {
            size: '16px',
            weight: 500,
        },
        h4: {
            size: '14px',
            weight: 600,
        },
        h5: {
            size: '12px',
            weight: 600,
        },
        navigation: {
            size: '13px',
            weight: 500,
        },
        label: {
            size: '12px',
            weight: 600,
        },
        text: {
            size: '12px',
            weight: 400,
        },
        text_sm: {
            size: '1px',
            weight: 400,
        }
    }
}

export class Typography {
    public readonly h1: ITypography;
    public readonly h2: ITypography;
    public readonly h3: ITypography;
    public readonly h4: ITypography;
    public readonly h5: ITypography;
    public readonly navigation: ITypography;
    public readonly label: ITypography;
    public readonly text: ITypography;
    public readonly text_sm: ITypography;

    constructor(device: Devices) {
        const deviceSelector = device > Devices.mobile ? 'desktop' : 'mobile';
        this.h1 = BaseTypography[deviceSelector].h1;
        this.h2 = BaseTypography[deviceSelector].h2;
        this.h3 = BaseTypography[deviceSelector].h3;
        this.h4 = BaseTypography[deviceSelector].h4;
        this.h5 = BaseTypography[deviceSelector].h5;
        this.navigation = BaseTypography[deviceSelector].navigation;
        this.label = BaseTypography[deviceSelector].label;
        this.text = BaseTypography[deviceSelector].text;
        this.text_sm = BaseTypography[deviceSelector].text_sm;
    }
}