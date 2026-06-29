import { useState } from "react";
import { useColor } from "@/modules/preview/hooks/use-color";
import { FG_DEFAULT_COLOR } from "@/modules/preview/store/color.store";
import { Button } from "@/modules/ui/components/button";
import { Card, CardContent } from "@/modules/ui/components/card";
import {
	HeartIcon,
	NextIcon,
	PauseCircleIcon,
	PreviousIcon,
	RepeatOneIcon,
	ShuffleIcon,
} from "@/modules/ui/icons";
import { applyStyle, cssFgVar } from "@/modules/utils";
import { Wrapper } from "./wrapper";

export function Example07() {
	const { bgRgb } = useColor();
	const [liked, setLiked] = useState(false);

	return (
		<Wrapper className="bg-bgDefault break-inside-avoid mb-5">
			<Card
				className="max-w-152.5 border-0"
				style={{ ...applyStyle("bg"), ...applyStyle("color") }}
			>
				<CardContent>
					<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
						<div className="relative col-span-6 md:col-span-4">
							<img
								alt="Album cover"
								className="object-cover shadow-sm-custom rounded-lg w-full h-50"
								src="assets/img/Blurryface.webp"
							/>
						</div>

						<div className="flex flex-col col-span-6 md:col-span-8">
							<div className="flex justify-between items-start">
								<div
									className="flex flex-col gap-0"
									style={applyStyle("color")}
								>
									<h3 className="font-semibold">Daily Mix</h3>
									<p className="text-small">14 Tracks</p>
									<h1 className="text-large font-medium mt-2">Fairly Local</h1>
								</div>
								<Button
									variant="ghost"
									size="icon"
									className="text-default-900/60 -translate-y-2 translate-x-2"
									style={applyStyle("color")}
									aria-label={liked ? "Unlike" : "Like"}
									aria-pressed={liked}
									onClick={() => setLiked((v) => !v)}
								>
									<HeartIcon
										className={liked ? "[&>path]:stroke-transparent" : ""}
										fill={liked ? "currentColor" : "none"}
									/>
								</Button>
							</div>

							<div className="flex flex-col mt-3 gap-1">
								<div className="relative flex items-center select-none touch-none">
									<div
										className="relative flex-1 rounded-full h-2"
										style={applyStyle("bg", {
											fromVar: cssFgVar,
											alpha: "0.16",
										})}
									>
										<div
											className="absolute h-full rounded-full"
											style={{
												width: "50%",
												...(bgRgb
													? {
															...applyStyle("bg", {
																fromVar: cssFgVar,
																alpha: "1",
															}),
														}
													: { backgroundColor: FG_DEFAULT_COLOR }),
											}}
										/>
									</div>
								</div>
								<div
									className="flex justify-between"
									style={applyStyle("color")}
								>
									<p className="text-small">1:23</p>
									<p className="text-small">3:27</p>
								</div>
							</div>

							<div className="flex w-full items-center justify-center">
								<Button
									variant="ghost"
									size="icon"
									style={applyStyle("color")}
									aria-label="Repeat"
								>
									<RepeatOneIcon />
								</Button>
								<Button
									variant="ghost"
									size="icon"
									style={applyStyle("color")}
									aria-label="Previous track"
								>
									<PreviousIcon />
								</Button>
								<Button
									variant="ghost"
									size="icon"
									style={applyStyle("color")}
									aria-label="Pause"
								>
									<PauseCircleIcon size={54} />
								</Button>
								<Button
									variant="ghost"
									size="icon"
									style={applyStyle("color")}
									aria-label="Next track"
								>
									<NextIcon />
								</Button>
								<Button
									variant="ghost"
									size="icon"
									style={applyStyle("color")}
									aria-label="Shuffle"
								>
									<ShuffleIcon />
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Wrapper>
	);
}
