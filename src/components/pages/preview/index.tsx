'use client'

import MinimalistPage from "@/components/app/minimalist-page";
import { ToggleButton, ToggleButtonItem } from "@/components/app/toggle-button"
import UIElements from "@/components/app/ui-elements";
import { BG_DEFAULT_COLOR, FG_DEFAULT_COLOR, useColorStore } from "@/stores/colors"
import { bgVar, fgVar } from "@/utils/color.util";
import clsx from "clsx";
import Color from "color";
import { CSSProperties, useEffect, useMemo, useState } from "react";

const previewModes = {
    minimalistPage: "minimalist-page",
    uiElements: "ui-elements",
};

const Preview = () => {

    const [previewMode, setPreviewMode] = useState<string>(previewModes.uiElements);
    const [{ bgRgb, fgRgb }, setColors] = useState<{ bgRgb: string, fgRgb: string }>({ bgRgb: "", fgRgb: "" });

    const styles: CSSProperties = useMemo(() => ({
        marginInline: "auto",
        [fgVar]: fgRgb || FG_DEFAULT_COLOR,
        [bgVar]: bgRgb || BG_DEFAULT_COLOR
    }), [fgRgb, bgRgb])

    useEffect(() => {
        const unsubscribe = useColorStore.subscribe(({ bg, fg }) => {
            const bgRgb = Color(bg).rgb().round().array().join(" ");
            const fgRgb = Color(fg).rgb().round().array().join(" ");

            setColors({ bgRgb, fgRgb })
        })

        return () => unsubscribe()
    }, [])

    return (
        <div className="w-full px-4 md:px-6 md:pt-14">
            <section className="my-6" style={styles}>
                <div className="text-center mb-6">
                    <ToggleButton defaultValue={previewMode} onChange={setPreviewMode}>
                        <ToggleButtonItem value={previewModes.minimalistPage}>Minimalist Page</ToggleButtonItem>
                        <ToggleButtonItem value={previewModes.uiElements}>UI Elements</ToggleButtonItem>
                    </ToggleButton>
                </div>
                {/* <div className="bg-bgDefault"> */}
                {previewMode === previewModes.minimalistPage ? <MinimalistPage /> : <UIElements />}
                {/* </div> */}
            </section>
        </div>
    )
}

export default Preview