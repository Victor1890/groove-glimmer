import { useContrastRelationStore, useColorStore } from "@/stores/colors";
import { useEffect, useMemo } from "react";

export function useContrastScore() {

    const {
        contrast,
        feedback,
        updateContrastRelation
    } = useContrastRelationStore()

    const color = useMemo(() => {
        const semanticColor = {
            "poor": "#961D12",
            "good": "#00660F",
            "very-good": "#00660F",
        };

        return semanticColor[feedback];

    }, [feedback]);

    useEffect(() => {
        const unsubscribe = useColorStore.subscribe((colors) => {
            const { bg, fg } = colors
            updateContrastRelation({ bg, fg })
        })
        return () => unsubscribe()
    }, [])

    return {
        contrast,
        feedback,
        color
    }
}