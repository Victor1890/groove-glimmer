import { TwentyOnePilotsLogo } from "@/modules/ui/icons";
import { applyStyle } from "@/modules/utils";

export function Navbar() {
	return (
		<nav
			style={applyStyle("color")}
			aria-label="Minimalist site navigation"
			className="w-full mx-auto px-4 md:px-6 h-20 flex justify-between items-center"
		>
			<TwentyOnePilotsLogo width={50} height={50} />
			<div>
				<button
					type="button"
					className="font-medium lg:hidden"
					aria-label="Open menu"
				>
					MENU
				</button>
				<ul className="font-medium hidden lg:flex lg:gap-6">
					<li>
						<a href="#home">HOME</a>
					</li>
					<li>
						<a href="#tours">TOURS</a>
					</li>
					<li>
						<a href="#music">MUSIC</a>
					</li>
					<li>
						<a href="#shop">SHOP</a>
					</li>
					<li>
						<a href="#contact">CONTACT</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
