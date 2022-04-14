// Models
import { Color } from "./colors";
import { Typography } from "./typography";
import { Elevation } from "./elevation";

// Types
import { Devices } from "_config/device/types";
import { ThemeTypes } from "_config/theme";

export class Atoms {
    public readonly color: Color;
    public readonly typography: Typography;
    public readonly elevation: Elevation;

    constructor(theme: ThemeTypes, device: Devices) {
        this.color = new Color(theme);
        this.typography = new Typography(device);
        this.elevation = new Elevation();
    }
}