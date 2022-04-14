import { Atoms } from "atoms";
import { Devices } from "_config/device/types";

export type ThemeTypes = 'light' | 'dark';

export class Theme extends Atoms {
    public readonly themeMode: ThemeTypes;
    public readonly device: Devices;

    constructor(themeMode: ThemeTypes, device: Devices) {
        super(themeMode, device);
        this.themeMode = themeMode;
        this.device = device;
    }
}