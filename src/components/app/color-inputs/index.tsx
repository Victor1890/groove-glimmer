import { Fragment } from "react";
import ColorControl from "../color-control";
import { SuggestionsButton, SwapButton } from "./button";

const ColorInputs = () => {



    return (
        <Fragment>
            <div className="flex flex-col items-center gap-8">
                <ColorControl label="Background Color" value="#000" />
            </div>

            <div className="flex flex-row md:flex-col gap-3">
                <SwapButton />
                <SuggestionsButton />
            </div>
        </Fragment>
    )
}

export default ColorInputs;