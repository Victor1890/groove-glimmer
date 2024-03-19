import { useMemo } from 'react';
import { SuggestionProps } from './suggestion.interface'
import { createSuggestions } from '@/libs/contrast-suggestions';
import { useColorStore, useContrastRelationStore } from '@/stores/colors';
import { clsx } from 'clsx'
import SuggestionItem from './item';

const Suggestions = ({ type, className, onApply }: SuggestionProps) => {

    const { bg, fg, updateColors } = useColorStore()
    const score = useContrastRelationStore()

    const isFg = useMemo(() => type === "foreground", [type]);
    const suggestions = getSuggestions();
    const isEmpty = useMemo(() => suggestions.length === 0, [suggestions]);

    function getSuggestions() {
        const output = createSuggestions({ forColor: isFg ? bg : fg, matchingColor: isFg ? fg : bg });

        return output.filter(
            (sug) => parseFloat(sug.contrast) > score.contrast && sug.color !== (isFg ? fg : bg),
        );
    }

    function handleOnApply(color: string) {
        isFg ? updateColors({ fg: color }) : updateColors({ bg: color });
        onApply?.(color);
    }

    if (isEmpty) return <p className="">There is nothing more to suggest</p>

    return (
        <div className={clsx(
            "grid gap-5",
            className
        )}>
            {suggestions.map(({ color, contrast, id }) => (
                <SuggestionItem
                    key={id}
                    color={color}
                    contrast={contrast}
                    textColor={isFg ? bg : fg}
                    onApply={handleOnApply}
                />
            ))}
        </div>
    )
}

export default Suggestions;