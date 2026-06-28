import { useSwapColors } from "@/modules/preview/hooks/use-swap-colors";
import { Button } from "@/modules/ui/components/button";
import { InvertFill } from "@/modules/ui/icons";

export function SwapButton() {
	const handleSwap = useSwapColors();

	return (
		<Button
			variant="ghost"
			size="icon"
			aria-label="Swap Colors"
			title="Swap Colors"
			className="text-[1.5rem]"
			onClick={handleSwap}
		>
			<InvertFill />
		</Button>
	);
}
