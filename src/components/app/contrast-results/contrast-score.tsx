import { EmojiVeryHappyFill, HappyFill, UnhappyFill } from "@/components/icons/emoji";
import { useContrastRelationStore } from "@/stores/colors";
import { useMemo, type ComponentType, type SVGProps } from "react";

type EmojiComponent = ComponentType<SVGProps<SVGSVGElement>>;

const EmojiStatus: Record<"poor" | "good" | "very-good", EmojiComponent> = {
    poor: UnhappyFill,
    good: HappyFill,
    "very-good": EmojiVeryHappyFill,
};

const ContrastScore = () => {

    const { contrast, feedback } = useContrastRelationStore()
    const Emoji = useMemo(() => EmojiStatus[feedback], [feedback]);

    const color = useMemo(() => {
        const semanticColor = {
            "poor": "#d92d20",
            "good": "#079455",
            "very-good": "#079455",
        };

        return semanticColor[feedback];

    }, [feedback]);

    return (
        <div className="flex justify-between items-end" style={{ color }}>
            <div>
                <span className="text-lg mb-1 font-medium block capitalize">{feedback.replace("-", " ")}</span>
                <span className="text-5xl font-bold block">{contrast.toFixed(2)}</span>
            </div>
            <Emoji className="text-4xl" />
        </div>
    )
}

export default ContrastScore;