import { useColorStore, useWCAGLevelResultStore } from "@/stores/colors"
import { useEffect } from "react"

export function useValidContrastLevel() {
    const { bg, fg } = useColorStore()
    const {
        passAANormalText,
        passAALargeText,
        passAAANormalText,
        passAAALargeText,
        updateWCAGLevelResult
    } = useWCAGLevelResultStore()

    useEffect(() => {
        if (!bg || !fg) return
        updateWCAGLevelResult({ bg, fg })
    }, [bg, fg])

    return {
        passAANormalText,
        passAALargeText,
        passAAANormalText,
        passAAALargeText
    }
}