import { Button } from "@nextui-org/react";
import { SuggestionItemProps } from "./suggestion.interface";

function SuggestionItem({ color, contrast, textColor, onApply }: SuggestionItemProps) {

    return (
        <article className="border-1 border-solid rounded-lg overflow-hidden">
            <div className="aspect-square flex items-center justify-center font-medium text-[1.25rem] leading-[30px]" style={{ background: color }}>
                <span className="text-[1.25rem] leading-[29px]" style={{ color: textColor }}>Aa</span>
            </div>
            <div className="flex items-center justify-between border-1 border-solid px-4 py-3">
                <Button
                    className="font-medium"
                    type="button"
                    size="sm"
                    variant="faded"
                    onClick={() => onApply?.(color)}
                >
                    Apply
                </Button>
                <span className="text-base text-black">
                    {contrast}
                </span>
            </div>
        </article>
    )
}

export default SuggestionItem;