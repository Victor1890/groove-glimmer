'use client'

import MinimalistPage from "@/components/app/minimalist-page";
import { ToggleButton, ToggleButtonItem } from "@/components/app/toggle-button";
import UIElements from "@/components/app/ui-elements";
import { useColor } from "@/hooks";
import { BG_DEFAULT_COLOR, FG_DEFAULT_COLOR } from "@/stores/colors";
import { bgVar, fgVar } from "@/utils/color.util";
import { CSSProperties, useMemo, useState } from "react";

const previewModes = {
    minimalistPage: "minimalist-page",
    uiElements: "ui-elements",
};

const Preview = () => {

    const [previewMode, setPreviewMode] = useState<string>(previewModes.minimalistPage);
    const { bgRgb, fgRgb } = useColor()

    const styles: CSSProperties = useMemo(() => ({
        marginInline: "auto",
        [fgVar]: fgRgb || FG_DEFAULT_COLOR,
        [bgVar]: bgRgb || BG_DEFAULT_COLOR
    }), [fgRgb, bgRgb])

    return (
        <div className="w-full px-4 md:px-6 md:pt-14">
            <section className="my-6" style={styles}>
                <div className="text-center mb-6">
                    <ToggleButton defaultValue={previewMode} onChange={setPreviewMode}>
                        <ToggleButtonItem value={previewModes.minimalistPage}>Minimalist Page</ToggleButtonItem>
                        <ToggleButtonItem value={previewModes.uiElements}>UI Elements</ToggleButtonItem>
                    </ToggleButton>
                </div>
                {previewMode === previewModes.minimalistPage ? <MinimalistPage /> : <UIElements />}
            </section>
        </div>
    )
}

export default Preview