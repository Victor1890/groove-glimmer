'use client'

import { applyStyle } from "@/utils/color.util";
import {
    WindowMockup,
    Navbar,
    Hero,
    About
} from "./components";



function MinimalistPage() {
    return (
        <div style={applyStyle('bg')} className="shadow-xl rounded-xl border-1 border-solid border-gray-200 overflow-hidden w-full">
            <WindowMockup />
            <Navbar />
            <div className="flex flex-col gap-12 mt-8 lg:gap-16">
                <Hero />
                <About />
            </div>
        </div>
    )
}

export default MinimalistPage;