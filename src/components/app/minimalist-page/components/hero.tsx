import Image from "next/image";
import { applyStyle } from "@/utils/color.util";
import { tuskerGrotesk } from '@/config/fonts'
import clsx from "clsx";

export function Hero() {
    return (
        <section style={applyStyle('color')}>
            <div className="max-w-5xl mx-auto px-4 md:px-6 mb-12 lg:mb-16">
                <h2
                    className={clsx(
                        tuskerGrotesk.className,
                        "text-center text-[12.25rem]"
                    )}
                >
                    Twenty-One Pilots
                </h2>
            </div>
            <figure>
                <Image
                    alt="background hero"
                    className="w-full object-cover h-[380px] lg:h-[460px]"
                    height='800'
                    loading="lazy"
                    src={"/assets/img/hero-image.webp"}
                    width={'800'}
                />
            </figure>
        </section>
    )
}