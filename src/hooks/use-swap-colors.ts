import { useColorStore } from "@/stores/colors";
import { useCallback } from "react";

export function useSwapColors() {

    // TODO: improve this hook
    const { bg, fg, updateColors } = useColorStore.getState();

    const swapColors = () => updateColors({ bg: fg, fg: bg })

    return swapColors;
}