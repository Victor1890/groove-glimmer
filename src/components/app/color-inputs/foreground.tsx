import { useColorStore } from "@/stores/colors";
import ColorControl from "../color-control";

const ForegroundInput = () => {

    const { fg, updateColors } = useColorStore()

    return (
        <div className="flex flex-col items-center gap-8">
            <ColorControl label="Text Color" value={fg} onChange={(color) => updateColors({ fg: color })} />
        </div>
    )
}

export default ForegroundInput;