import 'styled-components';
import { Devices } from '_config/device/types';
import { Theme } from '_config/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        device: Devices
    }
}