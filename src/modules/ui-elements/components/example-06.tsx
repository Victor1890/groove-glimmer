import { useColor } from "@/modules/preview/hooks/use-color";
import { FG_DEFAULT_COLOR } from "@/modules/preview/store/color.store";
import { Card, CardContent } from "@/modules/ui/components/card";
import { applyStyle, cssFgVar } from "@/modules/utils";
import { Wrapper } from "./wrapper";

export function Example06() {
	const { bgRgb } = useColor();

	return (
		<Wrapper className="bg-bgDefault break-inside-avoid mb-5">
			<Card style={{ ...applyStyle("bg"), ...applyStyle("color") }}>
				<CardContent className="flex flex-col gap-6 p-6 rounded-xl">
					<div className="flex items-center justify-between">
						<p className="text-lg font-medium">Project Progress</p>
						<p className="text-sm">50%</p>
					</div>
					<div
						role="progressbar"
						aria-valuenow={50}
						aria-valuemin={0}
						aria-valuemax={100}
						aria-label="Project progress"
						className="relative flex items-center select-none touch-none"
					>
						<div
							className="relative flex-1 rounded-full h-2"
							style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
						>
							<div
								className="absolute h-full rounded-full"
								style={{
									width: "50%",
									...(bgRgb
										? { ...applyStyle("bg", { fromVar: cssFgVar, alpha: "1" }) }
										: { backgroundColor: FG_DEFAULT_COLOR }),
								}}
							/>
						</div>
					</div>
				</CardContent>
			</Card>
		</Wrapper>
	);
}
