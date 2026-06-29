import { applyStyle } from "@/modules/utils";

export function About() {
	return (
		<section
			style={applyStyle("color")}
			className="max-w-5xl md:px-6 mx-auto px-4"
		>
			<p className="font-medium text-[1.25rem] leading-7.5 lg:text-[1.875rem] lg:leading-9.5">
				<span className="inline-block font-normal text-base w-1/5 lg:w-1/6 lg:text-[1.125rem] lg:leading-7">
					About
				</span>
				Twenty One Pilots are an American musical duo from Columbus, Ohio.
				Initially a band, the group was formed in 2009 by lead vocalist Tyler
				Joseph along with Nick Thomas and Chris Salih, who both left in 2011.
				Since their departure, the line-up has consisted of Joseph and drummer
				Josh Dun. The duo is best known for their singles "Stressed Out",
				"Ride", and "Heathens". The group received a Grammy Award for Best Pop
				Duo/Group Performance at the 59th Annual Grammy Awards for "Stressed
				Out".
			</p>
			<div className="flex flex-col mt-12 gap-4 lg:justify-between lg:flex-row">
				<ul className="flex flex-wrap justify-center gap-4 lg:gap-6 lg:justify-start">
					<li>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							Instagram
						</a>
					</li>
					<li>
						<a
							href="https://youtube.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							Youtube
						</a>
					</li>
					<li>
						<a
							href="https://spotify.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							Spotify
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							Twitter
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
