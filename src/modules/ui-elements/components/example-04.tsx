import { SVGDecorator, SvgSuitcaseFill } from "@/modules/ui/icons";
import { applyStyle, cssFgVar } from "@/modules/utils";
import { Wrapper } from "./wrapper";

export function Example04() {
	return (
		<Wrapper className="bg-bgDefault break-inside-avoid mb-5">
			<div
				className="relative gap-4 p-6 rounded-xl flex items-center overflow-hidden"
				style={{ ...applyStyle("bg"), ...applyStyle("color") }}
			>
				<div
					className="flex items-center justify-center flex-0 w-16 h-16 rounded-full text-[2rem]"
					style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
				>
					<SvgSuitcaseFill style={applyStyle("color", { alpha: "1" })} />
				</div>
				<div>
					<p className="text-lg font-medium">Dear Client</p>
					<p className="text-base mt-1">
						Join our online community. It helps in managing your projects
					</p>
				</div>
				<SVGDecorator
					className="absolute -top-4 -right-3"
					style={applyStyle("color", { alpha: ".6" })}
				/>
			</div>
		</Wrapper>
	);
}
