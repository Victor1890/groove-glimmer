import { Button } from "@/modules/ui/components/button";
import type { SuggestionItemProps } from "./suggestion.interface";

export function SuggestionItem({
	color,
	contrast,
	textColor,
	onApply,
}: SuggestionItemProps) {
	return (
		<article className="border rounded-lg overflow-hidden">
			<div
				className="aspect-square flex items-center justify-center font-medium text-[1.25rem] leading-7.5"
				style={{ background: color }}
			>
				<span
					className="text-[1.25rem] leading-7.25"
					style={{ color: textColor }}
				>
					Aa
				</span>
			</div>
			<div className="flex items-center justify-between px-4 py-3">
				<Button
					variant="outline"
					size="sm"
					type="button"
					onClick={() => onApply?.(color)}
				>
					Apply
				</Button>
				<span className="text-base text-black">{contrast}</span>
			</div>
		</article>
	);
}
