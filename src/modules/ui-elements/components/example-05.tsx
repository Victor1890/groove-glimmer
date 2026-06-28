import { useColor } from "@/hooks";
import { Card, CardContent } from "@/modules/ui/components/card";
import { FG_DEFAULT_COLOR } from "@/stores";
import { applyStyle, cssFgVar } from "@/utils/color.util";
import Container from "./container";

function Example05() {
	const { bgRgb } = useColor();

	return (
		<Container className="bg-bgDefault break-inside-avoid mb-5">
			<Card style={{ ...applyStyle("bg"), ...applyStyle("color") }}>
				<CardContent className="flex flex-col gap-6 p-6 rounded-xl">
					<p>Server Resources</p>
					<div>
						<p className="text-lg font-bold">$30,227.00</p>
						<p className="text-base mt-2">Estimated savings</p>
					</div>
					<div className="relative flex items-center select-none touch-none">
						<div
							className="relative flex-1 rounded-full h-2"
							style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
						>
							<div
								className="absolute h-full rounded-full"
								style={{
									width: "40%",
									...(Boolean(bgRgb)
										? { ...applyStyle("bg", { fromVar: cssFgVar, alpha: "1" }) }
										: { backgroundColor: FG_DEFAULT_COLOR }),
								}}
							/>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<div>
							<p className="text-lg font-bold">$20,124/mo</p>
							<p className="text-sm mt-2">Total saved</p>
						</div>
						<div>
							<p className="text-lg font-bold">$10,124/mo</p>
							<p className="text-sm mt-2">Saving in progress</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</Container>
	);
}

export default Example05;
