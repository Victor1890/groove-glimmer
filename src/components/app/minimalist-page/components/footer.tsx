import { TwentyOnePilotsLogo } from "@/components/icons/navbar";
import { applyStyle } from "@/utils/color.util";

export function Footer() {
    return (
        <footer style={applyStyle("color")} className="max-w-7xl mx-auto px-4 md:px-6 pb-5 w-full flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
            <TwentyOnePilotsLogo width={50} height={50} />
            <ul className="flex gap-6 flex-wrap font-medium">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
            </ul>
        </footer>
    )
}