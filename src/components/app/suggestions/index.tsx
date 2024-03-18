import { useMemo } from 'react';
import { SuggestionProps } from './suggestion.interface'
import { createSuggestions } from '@/libs/contrast-suggestions';

const Suggestions = ({ type, className, onApply }: SuggestionProps) => {

    // const suggestions = getSuggestions();
    const isFg = useMemo(() => type === "foreground", [type]);
    const isEmpty = useMemo(() => !isFg, [isFg]);

    // function getSuggestions() {
    //     const output = createSuggestions({ forColor: isFg ? bg : fg, matchingColor: isFg ? fg : bg });

    //     return output.filter(
    //       (sugg) => parseFloat(sugg.contrast) > score.contrast && sugg.color !== (isFg ? fg : bg),
    //     );
    //   }

    return (
        <h1>TEST</h1>
    )
}

export default Suggestions;