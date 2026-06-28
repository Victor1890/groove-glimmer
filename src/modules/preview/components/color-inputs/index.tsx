import { Fragment } from "react";
import { BackgroundInput } from "./background";
import { ForegroundInput } from "./foreground";
import { SuggestionsButton } from "./suggestions-button";
import { SwapButton } from "./swap-button";

export function ColorInputs() {
	return (
		<Fragment>
			<BackgroundInput />

			<div className="flex justify-center items-center flex-row md:flex-col gap-3">
				<SwapButton />
				<SuggestionsButton />
			</div>

			<ForegroundInput />
		</Fragment>
	);
}
