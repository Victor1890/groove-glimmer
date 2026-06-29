import {
	Example01,
	Example02,
	Example03,
	Example04,
	Example05,
	Example06,
	Example07,
	Example08,
	Example09,
	Example10,
} from "@/modules/ui-elements/components";

export function UIElements() {
	return (
		<div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
			<Example01 />
			<Example02 />
			<Example03 />
			<Example04 />
			<Example05 />
			<Example06 />
			<Example07 />
			<Example08 />
			<Example09 />
			<Example10 />
		</div>
	);
}
