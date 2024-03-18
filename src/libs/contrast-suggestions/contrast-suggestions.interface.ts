export interface AccessibleColor {
    contrast: string;
    color: string;
    id: string;
}

export interface ColorScaleOpts {
    range?: [number, number];
    stepsDistance?: number;
    startInRange?: number;
    stopInRange?: number;
    direction?: "center" | "start";
}
