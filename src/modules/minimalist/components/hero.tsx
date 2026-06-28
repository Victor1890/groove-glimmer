import { applyStyle } from "@/modules/utils";

export function Hero() {
	return (
		<section style={applyStyle("color")}>
			<div className="max-w-5xl mx-auto px-4 md:px-6 mb-12 lg:mb-16">
				<h2 className="text-center text-[12.25rem] font-tusker-grotesk">
					Twenty-One Pilots
				</h2>
			</div>
			<figure>
				<img
					alt="background hero"
					className="w-full object-cover h-95 lg:h-115"
					src={"/assets/img/hero-image.webp"}
				/>
			</figure>
		</section>
	);
}
