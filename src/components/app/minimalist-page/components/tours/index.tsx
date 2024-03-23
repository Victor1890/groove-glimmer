import { applyStyle } from "@/utils/color.util";
import { tours } from "./data";
import TourItem from "./item";

export function Tours() {
    return (
        <section style={applyStyle("color")} className="w-full mx-auto px-4 md:px-6">
            <h2 className="uppercase font-bold mb-8 text-[2.25rem] leading-[44px] lg:mb-12 lg:text-[3rem] lg:leading-[60px]">tour</h2>
            <ul>
                {tours.map((item, index) => (
                    <li key={`${item.name}-${index}`}>
                        <TourItem {...item} />
                    </li>
                ))}
            </ul>
        </section>
    )
}