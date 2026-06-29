import { Button } from "@/modules/ui/components/button";
import { Card, CardContent } from "@/modules/ui/components/card";
import { applyStyle, cssBgVar, cssFgVar } from "@/modules/utils";
import { Wrapper } from "./wrapper";

export function Example10() {
	return (
		<Wrapper className="bg-bgDefault max-w-full break-inside-avoid mb-5">
			<Card className="p-6" style={applyStyle("bg")}>
				<CardContent className="flex flex-col rounded-xl text-center gap-10">
					<p className="text-sm font-bold" style={applyStyle("color")}>
						Review your daily income
					</p>
					<div>
						<p className="text-4xl font-bold" style={applyStyle("color")}>
							$680.5
						</p>
						<p className="text-base font-bold mt-3" style={applyStyle("color")}>
							Change payout method in settings
						</p>
					</div>
					<Button
						size="lg"
						style={{
							...applyStyle("bg", { fromVar: cssFgVar }),
							...applyStyle("color", { fromVar: cssBgVar }),
						}}
					>
						Go settings
					</Button>
				</CardContent>
			</Card>
		</Wrapper>
	);
}
