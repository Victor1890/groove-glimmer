import ColorControl from "../color-control";

const ColorInputs = () => {

    return (
        <div className="flex flex-col items-center gap-8">
            <ColorControl label="Background Color" value="#000" />
        </div>
    )
}

export default ColorInputs;