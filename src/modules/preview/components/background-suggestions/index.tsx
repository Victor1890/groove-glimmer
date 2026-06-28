import { lazy, Suspense } from "react";
import { SuggestionSkeleton } from "../suggestions/skeleton";

const BackgroundSuggestions = lazy(() => import("./background"));
const ForegroundSuggestions = lazy(() => import("./foreground"));

export function BackgroundSuggestionsWrapper() {
	return (
		<Suspense fallback={<SuggestionSkeleton />}>
			<BackgroundSuggestions />
		</Suspense>
	);
}

export function ForegroundSuggestionsWrapper() {
	return (
		<Suspense fallback={<SuggestionSkeleton />}>
			<ForegroundSuggestions />
		</Suspense>
	);
}

export {
	BackgroundSuggestionsWrapper as BackgroundSuggestions,
	ForegroundSuggestionsWrapper as ForegroundSuggestions,
};
