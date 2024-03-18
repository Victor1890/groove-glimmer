import ButtonClipboard from "./button-clipboard";
import ButtonPicker from "./button-picker";
import ColorInput from "./color-input";

interface ColorControlProps {
    label?: string
    onChange?: (value: string) => void
    value?: string
}

const ColorControl = ({ label, onChange, value }: ColorControlProps) => {

    return (
        <div className="flex items-center flex-1 w-[100%] gap-4">
            {/* Preview */}
            <div className="w-20 h-20 rounded-xl shadow-[--shadows-sm] shrink-0" style={{ backgroundColor: value }} />

            {/* Content */}
            <div className="flex-1">
                <label className="font-medium block mb-2">{label}</label>
                <ColorInput value={value} onChange={onChange} />
            </div>

            <div className="flex flex-col gap-1">
                <ButtonPicker color={value} setColor={onChange} />
                <ButtonClipboard color={value} />
            </div>
        </div>
    )
}

export default ColorControl;