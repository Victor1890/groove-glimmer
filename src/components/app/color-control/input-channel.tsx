import { regexNumberText, regexStartWithZero } from "@/constants";
import { useControllable } from "@/hooks/use-controllable";
import { ChangeEvent, useMemo } from "react";
import { Input } from "@nextui-org/react";

interface InputChannelProps {
    label: string;
    onChange?: (value: string) => void;
    max?: number;
    min?: number;
    value?: number;
}


const InputChannel = ({ label, max = 100, min = 0, onChange, value }: InputChannelProps) => {

    const valueToString = useMemo(() => value?.toString() || "0", [value]);
    const [inputValue, setInputValue] = useControllable("0", valueToString, onChange);

    function validateInputOnBlur() {
        let nextValue = inputValue;

        if (regexStartWithZero.test(nextValue)) {
            nextValue = parseInt(inputValue).toString();
        }

        if (
            !regexNumberText.test(inputValue) ||
            parseInt(nextValue) < min ||
            parseInt(nextValue) > max
        ) {
            nextValue = "0";
        }

        setInputValue(nextValue);
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const nextValue = e.target.value;

        setInputValue(nextValue, true);
    }

    // TODO: This is the input component that is used in the PopoverColorChannels component

    return (
        <div className="flex items-center justify-between">
            <span className="font-bold">{label}</span>
            <Input
                className="w-16"
                classNames={{
                    input: "text-center",
                }}
                type="text"
                size="sm"
                placeholder="0"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={validateInputOnBlur}
                min={1}
                max={3}
            />
        </div>
    )
}

export default InputChannel