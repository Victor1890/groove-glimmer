import { useColorStore } from "@/modules/preview/store/color.store";
import { ColorControl } from "../color-control";

export function ForegroundInput() {
	const { fg, updateColors } = useColorStore();

	return (
		<div className="flex flex-col items-center gap-8">
			<ColorControl
				label="Text Color"
				value={fg}
				onChange={(color) => updateColors({ fg: color })}
			/>
		</div>
	);
}
