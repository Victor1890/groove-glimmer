'use client'

import MinimalistPage from "@/components/app/minimalist-page";
import { ToggleButton, ToggleButtonItem } from "@/components/app/toggle-button"
import { useColorStore } from "@/stores/colors"
import { bgVar, fgVar } from "@/utils/color.util";
import Color from "color";
import { useEffect, useState } from "react";

const previewModes = {
    minimalistPage: "minimalist-page",
    uiElements: "ui-elements",
};

const Preview = () => {

    const [previewMode, setPreviewMode] = useState<string>(previewModes.minimalistPage);
    const [{ bgRgb, fgRgb }, setColors] = useState<{ bgRgb: string, fgRgb: string }>({ bgRgb: "", fgRgb: "" });

    useEffect(() => {
        const unsubscribe = useColorStore.subscribe(({ bg, fg }) => {
            const bgRgb = Color(bg).rgb().round().array().join(" ");
            const fgRgb = Color(fg).rgb().round().array().join(" ");

            setColors({ bgRgb, fgRgb })
        })

        return () => unsubscribe()
    }, [])

    return (
        <div style={{
            marginInline: "auto",
            [fgVar as string]: fgRgb,
            [bgVar as string]: bgRgb
        }} className="w-full px-4 md:px-6">
            <section className="my-6">
                <div className="text-center mb-6">
                    <ToggleButton defaultValue={previewMode} onChange={setPreviewMode}>
                        <ToggleButtonItem value={previewModes.minimalistPage}>Minimalist Page</ToggleButtonItem>
                        <ToggleButtonItem value={previewModes.uiElements}>UI Elements</ToggleButtonItem>
                    </ToggleButton>
                </div>
                {previewMode === previewModes.minimalistPage ? <MinimalistPage /> : null}
            </section>
        </div>
    )
}

export default Preview