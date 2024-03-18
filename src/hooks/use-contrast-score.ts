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
            "poor": "#d92d20",
            "good": "#079455",
            "very-good": "#079455",
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