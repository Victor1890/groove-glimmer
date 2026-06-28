export interface SuggestionItemProps {
	contrast: string;
	color: string;
	textColor: string;
	onApply?: (color: string) => void;
}

export interface SuggestionProps extends Pick<SuggestionItemProps, "onApply"> {
	className?: string;
	type: "foreground" | "background";
}
