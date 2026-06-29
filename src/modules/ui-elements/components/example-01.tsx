import { Card, CardContent } from "@/modules/ui/components/card";
import { Community } from "@/modules/ui/icons";
import { applyStyle } from "@/modules/utils";
import { Wrapper } from "./wrapper";

export function Example01() {
	return (
		<Wrapper className="bg-bgDefault break-inside-avoid mb-5">
			<Card
				style={applyStyle("bg")}
				className="rounded-xl shadow-md px-3 w-full border-0"
			>
				<CardContent className="py-5">
					<div className="flex gap-2.5">
						<Community />
						<div style={applyStyle("color")} className="flex flex-col">
							<span className="text-base">Auto Insurance</span>
							<span className="text-xs">1311 Cars</span>
						</div>
					</div>
					<div
						style={applyStyle("color")}
						className="flex gap-2.5 py-2 items-center"
					>
						<span className="text-xl font-semibold">$45,910</span>
						<span className="text-success text-xs">+ 4.5%</span>
					</div>
					<div className="flex items-center gap-6">
						<div style={applyStyle("color")}>
							<div>
								<span className="font-semibold text-success text-xs">
									{"↓"}
								</span>
								<span className="text-xs">100,930</span>
							</div>
							<span className="text-xs">USD</span>
						</div>

						<div style={applyStyle("color")}>
							<div>
								<span className="font-semibold text-danger text-xs">{"↑"}</span>
								<span className="text-xs">54,120</span>
							</div>
							<span className="text-xs">USD</span>
						</div>

						<div style={applyStyle("color")}>
							<div>
								<span className="font-semibold text-danger text-xs">
									{"⭐"}
								</span>
								<span className="text-xs">125</span>
							</div>
							<span className="text-xs">VIP</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</Wrapper>
	);
}
