'use client'

import MinimalistPage from "@/components/app/minimalist-page";
import { ToggleButton, ToggleButtonItem } from "@/components/app/toggle-button"
import { useColorStore } from "@/stores/colors"
import { useState } from "react";

const previewModes = {
    minimalistPage: "minimalist-page",
    uiElements: "ui-elements",
};

const Preview = () => {

    const [previewMode, setPreviewMode] = useState<string>(previewModes.minimalistPage);
    const { bg, fg } = useColorStore((state) => state)

    return (
        <div className="max-w-xl mx-auto px-4 md:px-6">
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