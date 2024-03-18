import { create } from 'zustand'
import Color from "color";
import {
    ColorStore,
    ContrastRelationStore,
    WCAGLevelResultStore
} from './color.interface';

import { wcagContrastTest, contrastGuidelines } from "@/libs/wcag-text-contrast";

const BG_DEFAULT_COLOR = '#FDFBF6'
const FG_DEFAULT_COLOR = '#242422'


export const useColorStore = create<ColorStore>((set, get) => ({
    bg: BG_DEFAULT_COLOR,
    fg: FG_DEFAULT_COLOR,
    updateColors: (colors) => set({ ...get(), ...colors })
}))

export const useWCAGLevelResultStore = create<WCAGLevelResultStore>((set) => {
    const { bg, fg } = useColorStore.getState()
    return wcagContrastTest(bg, fg)
})

export const useContrastRelationStore = create<ContrastRelationStore>((set, get) => {

    const { bg, fg } = useColorStore.getState()
    const contrast = Color(bg).contrast(Color(fg));
    let feedback: "poor" | "good" | "very-good" = "poor";

    if (contrast > contrastGuidelines.AAALevel.largeText) feedback = "good";
    if (contrast > contrastGuidelines.AAALevel.normalText) feedback = "very-good";

    return {
        contrast,
        feedback
    }
})