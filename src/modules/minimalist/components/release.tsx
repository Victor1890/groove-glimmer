import { RELEASES } from "@/modules/minimalist/constants";
import { Button } from "@/modules/ui/components/button";
import { Play } from "@/modules/ui/icons";
import { applyStyle } from "@/modules/utils";

interface ReleaseItemProps {
	title: string;
	authors: string;
	imgSrc: string;
}

function ReleaseItem({ authors, imgSrc, title }: ReleaseItemProps) {
	return (
		<article className="p-5">
			<figure className="aspect-square">
				<img
					className="w-full h-full object-cover"
					loading="lazy"
					decoding="async"
					src={imgSrc}
					alt={title}
				/>
			</figure>
			<div className="flex items-center mt-3 gap-3">
				<Button
					variant="outline"
					size="icon"
					aria-label="Play Release"
					disabled
				>
					<Play />
				</Button>
				<div className="flex-1">
					<p className="font-bold text-[1.5rem] leading-8">{title}</p>
					<p className="text-base">{authors}</p>
				</div>
			</div>
		</article>
	);
}

export function Releases() {
	return (
		<section
			style={applyStyle("color")}
			className="w-full mx-auto px-4 md:px-6"
		>
			<div>
				<h2 className="font-bold text-center text-[2.25rem] leading-11 lg:text-[3rem] lg:leading-15">
					Releases
				</h2>
				<p className="text-center mt-2 text-base lg:text-[1.125rem] lg:leading-7">
					Check the latest releases of Twenty One Pilots right here!
				</p>
			</div>
			<ul className="grid gap-8 mt-8 lg:grid-cols-2 lg:mt-12 xl:grid-cols-3">
				{RELEASES.map((item) => (
					<li key={item.title}>
						<ReleaseItem {...item} />
					</li>
				))}
			</ul>
		</section>
	);
}
