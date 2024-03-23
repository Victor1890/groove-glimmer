import { useColorStore } from "@/stores";
import Color from "color";
import { useEffect, useState } from "react";

export function useColor() {

    const [{ bgRgb, fgRgb }, setColors] = useState({ bgRgb: "", fgRgb: "" });

    useEffect(() => {
        const unsubscribe = useColorStore.subscribe(({ bg, fg }) => {
            const bgRgb = Color(bg).rgb().round().array().join(" ");
            const fgRgb = Color(fg).rgb().round().array().join(" ");

            setColors({ bgRgb, fgRgb })
        })

        return () => unsubscribe()
    }, [])

    return { bgRgb, fgRgb }
}