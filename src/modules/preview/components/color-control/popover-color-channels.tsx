import Color from "color";
import { Fragment, useMemo, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useControllable } from "@/modules/preview/hooks/use-controllable";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/modules/ui/components/select";
import { type ColorMode, colorModes, resolveValidColor } from "@/modules/utils";
import { InputChannel } from "./input-channel";

interface PopoverColorChannelsProps {
	value?: string;
	onChange?: (color: string) => void;
}

export function PopoverColorChannels({
	value,
	onChange,
}: PopoverColorChannelsProps) {
	const [color, setColor] = useControllable("#000", value, onChange);
	const [mode, setMode] = useState<ColorMode>("rgb");
	const modesList = useMemo(() => Object.keys(colorModes), []);
	const channels = useMemo(
		() =>
			colorModes[mode]
				.converter(resolveValidColor(color))
				.map((v) => Math.floor(v)),
		[mode, color],
	);

	const updateChannel = (
		channels: number[],
		channelModified: number,
		channelIndexModified: number,
	) => {
		const nextChannels = [...channels];
		nextChannels[channelIndexModified] = channelModified;
		return nextChannels;
	};

	const handleChannelChange = (index: number) => (value: number | string) => {
		const nextValue = parseInt(value.toString());
		const nextChannels = updateChannel(channels, nextValue, index);
		const resolvedColor = Color(nextChannels, mode).hex();

		setColor(resolvedColor);
	};

	return (
		<Fragment>
			<div className="flex items-center justify-between w-full">
				<span className="font-medium w-full">Color Space</span>

				<Select value={mode} onValueChange={(v) => setMode(v as ColorMode)}>
					<SelectTrigger className="w-30 uppercase">
						<SelectValue placeholder={mode} />
					</SelectTrigger>
					<SelectContent>
						{modesList.map((name) => (
							<SelectItem key={name} value={name}>
								{name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<HexColorPicker
				style={{ width: "100% !important", height: 170 }}
				color={color}
				onChange={setColor}
			/>
			<div className="grid gap-3 mt-5 w-[80%]">
				{channels.map((value, index) => {
					const colorMode = colorModes[mode];

					return (
						<InputChannel
							key={`${value}-${colorMode.channels[index].label}`}
							label={colorMode.channels[index].label}
							max={colorMode.channels[index].max}
							min={colorMode.channels[index].min}
							value={value}
							onChange={handleChannelChange(index)}
						/>
					);
				})}
			</div>
		</Fragment>
	);
}
