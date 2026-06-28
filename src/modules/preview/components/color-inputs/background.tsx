import { useColorStore } from "@/modules/preview/store/color.store";
import { ColorControl } from "../color-control";

export function BackgroundInput() {
	const { bg, updateColors } = useColorStore();

	return (
		<div className="flex flex-col items-center gap-8">
			<ColorControl
				label="Background Color"
				value={bg}
				onChange={(color) => updateColors({ bg: color })}
			/>
		</div>
	);
}
