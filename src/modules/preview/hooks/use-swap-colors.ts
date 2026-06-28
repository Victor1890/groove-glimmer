import { useColorStore } from "../store/color.store";

export function useSwapColors() {
	const { updateColors } = useColorStore();

	const swapColors = () => {
		const { bg, fg } = useColorStore.getState();
		updateColors({ bg: fg, fg: bg });
	};

	return swapColors;
}
