import { Fragment } from "react";
import BackgroundInput from "./background";
import { SuggestionsButton, SwapButton } from "./button";
import ForegroundInput from "./foreground";

const ColorInputs = () => {



    return (
        <Fragment>
            <BackgroundInput />

            <div className="flex justify-center items-center flex-row md:flex-col gap-3">
                <SwapButton />
                <SuggestionsButton />
            </div>

            <ForegroundInput />
        </Fragment>
    )
}

export default ColorInputs;