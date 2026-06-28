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
		<div className="columns-1 md:columns-2 lg:columns-3 gap-5">
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
