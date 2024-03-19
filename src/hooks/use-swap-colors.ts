import { useColorStore } from "@/stores/colors";
import { useCallback } from "react";

export function useSwapColors() {

    const { updateColors } = useColorStore()

    const swapColors = useCallback(() => {
        const { bg, fg } = useColorStore.getState();
        updateColors({ bg: fg, fg: bg })
    }, [])

    return swapColors;
}