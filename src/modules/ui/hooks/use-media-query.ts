import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState<boolean>(false);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);
		setMatches(mediaQueryList.matches);
		const listener = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};
		mediaQueryList.addEventListener("change", listener);
		return () => {
			mediaQueryList.removeEventListener("change", listener);
		};
	}, [query, matches]);

	return matches;
};
