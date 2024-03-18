import { ColorMode, colorModes } from "@/constants";
import { useControllable } from "@/hooks/use-controllable";
import { resolveValidColor } from "@/utils/color.util";
import { Select, SelectItem } from "@nextui-org/react";
import { Fragment, useMemo, useState } from "react";
import { HexColorPicker } from "react-colorful";
import InputChannel from "./input-channel";
import Color from "color";

interface PopoverColorChannelsProps {
    value?: string;
    onChange?: (color: string) => void;
}

const PopoverColorChannels = ({ value, onChange }: PopoverColorChannelsProps) => {

    const [color, setColor] = useControllable("#000", value, onChange)
    const [mode, setMode] = useState<keyof ColorMode>("rgb");
    const modesList = useMemo(() => Object.keys(colorModes), [])
    const channels = useMemo(
        () => colorModes[mode].converter(resolveValidColor(color)).map((v) => Math.floor(v)),
        [mode, color],
    );

    const updateChannel = (channels: number[], channelModified: number, channelIndexModified: number) => {
        const nextChannels = [...channels];
        nextChannels[channelIndexModified] = channelModified;
        return nextChannels;
    }

    const handleChannelChange = (index: number) => (value: number | string) => {
        const nextValue = parseInt(value.toString());
        const nextChannels = updateChannel(channels, nextValue, index);
        const resolvedColor = Color(nextChannels, mode).hex();

        setColor(resolvedColor);
    };

    return (
        <Fragment>
            <div className="flex items-center justify-between w-[100%]">
                <span className="font-medium">Color Space</span>

                <Select
                    name={mode}
                    onChange={(e) => setMode(e.target.value as keyof ColorMode)}
                >
                    {
                        modesList.map((name) => (
                            <SelectItem className="uppercase" key={name} value={name}>
                                {name}
                            </SelectItem>
                        ))
                    }
                </Select>
            </div>
            <HexColorPicker style={{ width: "100% !important", height: 170 }} color={color} onChange={setColor} />
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
                    )
                })}
            </div>
        </Fragment>
    )
}

export default PopoverColorChannels