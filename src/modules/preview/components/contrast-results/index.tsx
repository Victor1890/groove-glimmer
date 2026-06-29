import { useValidContrastLevel } from "@/modules/preview/hooks/use-valid-contrast-level";
import { ContrastLevel } from "./contrast-level";
import { ContrastScore } from "./contrast-score";

export function ContrastResults() {
	const {
		passAAALargeText,
		passAAANormalText,
		passAALargeText,
		passAANormalText,
	} = useValidContrastLevel();

	return (
		<div className="flex flex-col gap-8 mt-8" aria-live="polite">
			<ContrastScore />
			<ul className="grid gap-y-5 gap-x-8 md:flex-1 sm:grid-cols-2">
				<ContrastLevel
					contrast="AA - 4.5:1"
					type="normal"
					isValid={passAANormalText}
				/>
				<ContrastLevel
					contrast="AA - 3:1"
					type="large"
					isValid={passAALargeText}
				/>
				<ContrastLevel
					contrast="AAA - 7:1"
					type="normal"
					isValid={passAAANormalText}
				/>
				<ContrastLevel
					contrast="AAA - 4.5:1"
					type="large"
					isValid={passAAALargeText}
				/>
			</ul>
		</div>
	);
}
