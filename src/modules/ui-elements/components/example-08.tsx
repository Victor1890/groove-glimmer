import { applyStyle, cssBgVar, cssFgVar } from "@/utils/color.util";
import Container from "./container";

function Example08() {
	return (
		<Container className="bg-bgDefault break-inside-avoid mb-5">
			<div className="flex flex-col p-6 rounded-xl" style={applyStyle("bg")}>
				<img
					alt="background"
					className="rounded-lg bg-cover w-full h-40 object-cover"
					src="/assets/img/twenty-one-pilots-wallpaper.webp"
					style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
				/>
				<div className="px-4 -mt-12">
					<figure>
						<img
							alt="avatar"
							className="flex item-center justify-center flex-0 w-20 h-20 rounded-full border-4 border-solid !border-white bg-black"
							src="/assets/img/twenty-one-pilots-logo.webp"
							style={{ borderColor: cssBgVar }}
						/>
					</figure>
					<p className="text-sm mt-3 font-bold" style={applyStyle("color")}>
						Twenty One Pilots
					</p>
					<p className="text-base mt-3" style={applyStyle("color")}>
						Band, American musical duo
					</p>
				</div>
			</div>
		</Container>
	);
}

export default Example08;
