import { type ChangeEvent, useMemo } from "react";
import { useControllable } from "@/modules/preview/hooks/use-controllable";
import { Input } from "@/modules/ui/components/input";
import { regexNumberText, regexStartWithZero } from "@/modules/utils";

interface InputChannelProps {
	label: string;
	onChange?: (value: string) => void;
	max?: number;
	min?: number;
	value?: number;
}

export function InputChannel({
	label,
	max = 100,
	min = 0,
	onChange,
	value,
}: InputChannelProps) {
	const valueToString = useMemo(() => value?.toString() || "0", [value]);
	const [inputValue, setInputValue] = useControllable(
		"0",
		valueToString,
		onChange,
	);

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

	return (
		<div className="flex items-center justify-between">
			<label className="font-bold" htmlFor={`channel-${label}`}>
				{label}
			</label>
			<Input
				id={`channel-${label}`}
				className="w-16 text-center"
				type="text"
				placeholder="0"
				value={inputValue}
				onChange={handleInputChange}
				onBlur={validateInputOnBlur}
			/>
		</div>
	);
}
