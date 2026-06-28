import {
	About,
	Footer,
	Hero,
	Navbar,
	Releases,
	Tours,
	WindowMockup,
} from "@/modules/minimalist/components";
import { applyStyle } from "@/modules/utils";

export function MinimalistPage() {
	return (
		<div className="bg-bgDefault">
			<div
				style={applyStyle("bg")}
				className="overflow-hidden shadow-xl rounded-xl border border-solid border-gray-200 w-full"
			>
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
	);
}
