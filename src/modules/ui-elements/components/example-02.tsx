import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/modules/ui/components/avatar";
import { Card, CardContent } from "@/modules/ui/components/card";
import { applyStyle } from "@/modules/utils";
import { Wrapper } from "./wrapper";

export function Example02() {
	return (
		<Wrapper className="bg-bgDefault break-inside-avoid mb-5">
			<Card
				style={applyStyle("bg")}
				className="rounded-xl shadow-md px-4 py-6 w-full border-0"
			>
				<CardContent style={applyStyle("color")} className="py-5 gap-6">
					<div className="flex gap-2.5 justify-center">
						<div className="flex flex-col border-dashed border-2 border-border py-2 px-6 rounded-xl">
							<span className=" text-xl font-semibold"> {"⭐"}Agents</span>
						</div>
					</div>

					<div className="flex items-center gap-6 flex-col">
						<span className="text-xs">
							Meet your agenda and see their ranks to get the best results
						</span>
						<div className="flex -space-x-2">
							{Array.from({ length: 6 }).map((_, index) => (
								<Avatar
									key={`avatar-${index}`}
									className="border-2 border-background"
								>
									<AvatarImage src="assets/img/user.jpeg" />
									<AvatarFallback>U</AvatarFallback>
								</Avatar>
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</Wrapper>
	);
}
