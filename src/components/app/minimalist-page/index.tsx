'use client'

import { applyStyle } from "@/utils/color.util";
import {
    WindowMockup,
    Navbar,
    Hero,
    About,
    Releases,
    Tours,
    Footer
} from "./components";

function MinimalistPage() {
    return (
        <div className="bg-bgDefault">
            <div style={applyStyle('bg')} className="overflow-hidden shadow-xl rounded-xl border-1 border-solid border-gray-200 w-full">
                <WindowMockup />
                <Navbar />
                <div className="flex flex-col gap-12 mt-8 lg:gap-16">
                    <Hero />
                    <About />
                    <Releases />
                    <Tours />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MinimalistPage;