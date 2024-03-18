export type ColorStore = {
    bg: string;
    fg: string;
    updateColors: (colors: Partial<ColorStore>) => void
}

export type WCAGLevelResultStore = {
    passAANormalText: boolean
    passAALargeText: boolean
    passAAANormalText: boolean
    passAAALargeText: boolean
    updateWCAGLevelResult: (colors: Partial<Omit<ColorStore, 'updateColors'>>) => void
}

export type ContrastRelationStore = {
    contrast: number
    feedback: "poor" | "good" | "very-good"
    updateContrastRelation: (colors: Partial<Omit<ColorStore, 'updateColors'>>) => void
}