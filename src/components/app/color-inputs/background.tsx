import { useColorStore } from "@/stores/colors";
import ColorControl from "../color-control";

const BackgroundInput = () => {

    const { bg, updateColors } = useColorStore()

    return (
        <div className="flex flex-col items-center gap-8">
            <ColorControl label="Background Color" value={bg} onChange={(color) => updateColors({ bg: color })} />
        </div>
    )
}

export default BackgroundInput;