import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/modules/ui/components/avatar";
import { Card, CardContent } from "@/modules/ui/components/card";
import { applyStyle } from "@/modules/utils";
import { Wrapper } from "./wrapper";

const items = [
	{
		name: "Jose Perez",
		picture: "assets/img/user.jpeg",
		amount: "4500 USD",
		date: "9/20/2021",
	},
	{
		name: "Jose Perez",
		picture: "assets/img/user.jpeg",
		amount: "4500 USD",
		date: "9/20/2021",
	},
	{
		name: "Jose Perez",
		picture: "assets/img/user.jpeg",
		amount: "4500 USD",
		date: "9/20/2021",
	},
	{
		name: "Jose Perez",
		picture: "assets/img/user.jpeg",
		amount: "4500 USD",
		date: "9/20/2021",
	},
	{
		name: "Jose Perez",
		picture: "assets/img/user.jpeg",
		amount: "4500 USD",
		date: "9/20/2021",
	},
];

export function Example03() {
	return (
		<Wrapper className="bg-bgDefault break-inside-avoid mb-5">
			<Card
				style={applyStyle("bg")}
				className="rounded-xl shadow-md px-3 border-0"
			>
				<CardContent className="py-5 gap-4">
					<div className="flex gap-2.5 justify-center">
						<div className="flex flex-col border-dashed border-2 border-border py-2 px-6 rounded-xl">
							<span
								style={applyStyle("color")}
								className="text-xl font-semibold"
							>
								Latest Transactions
							</span>
						</div>
					</div>

					<div style={applyStyle("color")} className="flex flex-col gap-6 ">
						{items.map((item) => (
							<div key={item.name} className="grid grid-cols-4 w-full">
								<div className="w-full">
									<Avatar className="border-2 border-background">
										<AvatarImage src={item.picture} />
										<AvatarFallback>JP</AvatarFallback>
									</Avatar>
								</div>

								<span className="font-semibold">{item.name}</span>
								<div>
									<span className="text-xs">{item.amount}</span>
								</div>
								<div>
									<span className="text-xs">{item.date}</span>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</Wrapper>
	);
}
