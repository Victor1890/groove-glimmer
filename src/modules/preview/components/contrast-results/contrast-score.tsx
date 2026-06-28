import { type ComponentType, type SVGProps, useMemo } from "react";
import { useContrastScore } from "@/modules/preview/hooks/use-contrast-score";
import { EmojiVeryHappyFill, HappyFill, UnhappyFill } from "@/modules/ui/icons";

type EmojiComponent = ComponentType<SVGProps<SVGSVGElement>>;

const EmojiStatus: Record<"poor" | "good" | "very-good", EmojiComponent> = {
	poor: UnhappyFill,
	good: HappyFill,
	"very-good": EmojiVeryHappyFill,
};

export function ContrastScore() {
	const { color, contrast, feedback } = useContrastScore();
	const Emoji = useMemo(() => EmojiStatus[feedback], [feedback]);

	return (
		<div className="flex justify-between items-end" style={{ color }}>
			<div>
				<span className="text-lg mb-1 font-medium block capitalize">
					{feedback.replace("-", " ")}
				</span>
				<span className="text-5xl font-bold block">{contrast.toFixed(2)}</span>
			</div>
			<Emoji className="text-4xl" />
		</div>
	);
}
