import { TwentyOnePilotsLogo } from "@/components/icons/navbar";
import { applyStyle } from "@/utils/color.util";

export function Navbar() {
    return (
        <section style={applyStyle("color")} className="w-full mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
            <TwentyOnePilotsLogo width={50} height={50} />
            <div>
                <span className="font-medium lg:hidden">MENU</span>
                <ul className="font-medium hidden lg:flex lg:gap-6">
                    <li>HOME</li>
                    <li>TOURS</li>
                    <li>MUSIC</li>
                    <li>SHOP</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </section>
    )
}