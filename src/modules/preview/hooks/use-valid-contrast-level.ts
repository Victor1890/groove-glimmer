import { useEffect } from "react";
import {
	useColorStore,
	useWCAGLevelResultStore,
} from "@/modules/preview/store/color.store";

export function useValidContrastLevel() {
	const { bg, fg } = useColorStore();
	const {
		passAANormalText,
		passAALargeText,
		passAAANormalText,
		passAAALargeText,
		updateWCAGLevelResult,
	} = useWCAGLevelResultStore();

	useEffect(() => {
		if (!bg || !fg) return;
		updateWCAGLevelResult({ bg, fg });
	}, [bg, fg, updateWCAGLevelResult]);

	return {
		passAANormalText,
		passAALargeText,
		passAAANormalText,
		passAAALargeText,
	};
}
