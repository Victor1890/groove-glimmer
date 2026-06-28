import { TOURS } from "@/modules/minimalist/constants";
import { ArrowRightUpLine } from "@/modules/ui/icons";
import { applyStyle } from "@/modules/utils";

export function Tours() {
	return (
		<section
			style={applyStyle("color")}
			className="w-full mx-auto px-4 md:px-6"
		>
			<h2 className="uppercase font-bold mb-8 text-[2.25rem] leading-11 lg:mb-12 lg:text-[3rem] lg:leading-15">
				tour
			</h2>
			<ul>
				{TOURS.map((item) => (
					<li key={`${item.name}`}>
						<TourItem {...item} />
					</li>
				))}
			</ul>
		</section>
	);
}

interface TourItemProps {
	name: string;
	location: string;
	zone: string;
	year: string;
}

function TourItem({ location, name, year, zone }: TourItemProps) {
	return (
		<article className="py-6 flex flex-col border-b border-solid lg:flex-row">
			<p className="font-bold text-[1.25rem] leading-7.5 lg:w-5/12">{name}</p>
			<p className="font-medium lg:w-2/12">{location}</p>
			<p className="truncate lg:w-2/12">{zone}</p>
			<p className="lg:w-2/12">{year}</p>
			<div className="flex justify-end items-center">
				<span className="mr-2 lg:hidden">Get Ticket</span>
				<ArrowRightUpLine className="text-[1.25rem]" />
			</div>
		</article>
	);
}
