import { TwentyOnePilotsLogo } from "@/modules/ui/icons";
import { applyStyle } from "@/modules/utils";

export function Footer() {
	return (
		<footer
			style={applyStyle("color")}
			className="max-w-7xl mx-auto px-4 md:px-6 pb-5 w-full flex flex-col gap-8 md:flex-row md:justify-between md:items-center"
		>
			<TwentyOnePilotsLogo width={50} height={50} />
			<ul className="flex gap-6 flex-wrap font-medium">
				<li>
					<a href="#terms">Terms & Conditions</a>
				</li>
				<li>
					<a href="#privacy">Privacy Policy</a>
				</li>
				<li>
					<a href="#cookies">Cookies Policy</a>
				</li>
			</ul>
		</footer>
	);
}
