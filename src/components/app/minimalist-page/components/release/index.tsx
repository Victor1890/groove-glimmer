import { applyStyle } from "@/utils/color.util";
import { releases } from "./data";
import ReleaseItem from "./item";

export function Releases() {
    return (
        <section style={applyStyle("color")} className="w-full mx-auto px-4 md:px-6">
            <div>
                <h2 className="font-bold text-center text-[2.25rem] leading-[44px] lg:text-[3rem] lg:leading-[60px]">Releases</h2>
                <p className="text-center mt-2 text-base lg:text-[1.125rem] lg:leading-7">Check the latest releases of Twenty One Pilots right here!</p>
            </div>
            <ul className="grid gap-8 mt-8 lg:grid-cols-2 lg:mt-12 xl:grid-cols-3">
                {releases.map((item) => (
                    <li key={item.title}>
                        <ReleaseItem {...item} />
                    </li>
                ))}
            </ul>
        </section>
    )
}