import { regexColorHexadecimal } from "@/constants"
import { useControllable } from "@/hooks/use-controllable"
import { ChangeEvent } from "react"

interface ColorInputProps {
    value?: string
    onChange?: (value: string) => void
    fallback?: string
}

const ColorInput = ({ value: valueProp = '', onChange, fallback = "#000000" }: ColorInputProps) => {

    const [value, setValue] = useControllable(fallback, valueProp, onChange)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value;
        const omitOnChange = !regexColorHexadecimal.test(nextValue);

        setValue(nextValue, omitOnChange);
    }

    const handleBlur = () => {
        if (!value || !regexColorHexadecimal.test(value)) setValue(fallback);
    }

    return (
        <input
            className="text-[1.5rem] leading-[32px] font-medium w=[100%]"
            type="text"
            value={value}
            placeholder={fallback}
            onBlur={handleBlur}
            onChange={handleChange}
        />
    )
}

export default ColorInput;