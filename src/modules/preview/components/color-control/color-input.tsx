import type { ChangeEvent } from "react";
import { useControllable } from "@/modules/preview/hooks/use-controllable";
import { regexColorHexadecimal } from "@/modules/utils";

interface ColorInputProps {
	value?: string;
	onChange?: (value: string) => void;
	fallback?: string;
}

export function ColorInput({
	value: valueProp = "",
	onChange,
	fallback = "#000000",
}: ColorInputProps) {
	const [value, setValue] = useControllable(fallback, valueProp, onChange);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const nextValue = e.target.value;
		const omitOnChange = !regexColorHexadecimal.test(nextValue);

		setValue(nextValue, omitOnChange);
	};

	const handleBlur = () => {
		if (!value || !regexColorHexadecimal.test(value)) setValue(fallback);
	};

	return (
		<input
			className="text-[1.5rem] leading-8 font-medium w-full"
			type="text"
			value={value}
			placeholder={fallback}
			onBlur={handleBlur}
			onChange={handleChange}
		/>
	);
}
