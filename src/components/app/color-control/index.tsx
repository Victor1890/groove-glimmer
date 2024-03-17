interface ColorControlProps {

}

const ColorControl = () => {

    return (
        <div className="flex items-center flex-1 w-[100%] gap-4">
            {/* Preview */}
            <div className="w-20 h-20 rounded-xl shadow-[--shadows-sm]" style={{ backgroundColor: "#000" }} />

            {/* Content */}
            <div className="flex-1">
                <label className="font-medium block mb-2">Background Color</label>
            </div>
        </div>
    )
}