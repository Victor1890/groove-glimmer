import { Button } from "@/modules/ui/components/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/modules/ui/components/popover";
import { ColorPickerFill } from "@/modules/ui/icons";
import { PopoverColorChannels } from "./popover-color-channels";

interface ButtonPickerProps {
	color?: string;
	setColor?: (color: string) => void;
}

export function ButtonPicker({ color, setColor }: ButtonPickerProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Color Picker"
					title="Color Picker"
				>
					<ColorPickerFill className="text-2xl" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-4" side="right">
				<PopoverColorChannels value={color} onChange={setColor} />
			</PopoverContent>
		</Popover>
	);
}
