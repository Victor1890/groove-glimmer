import { useCallback, useEffect, useReducer, useRef } from "react";
import { useWebsitePreviewStore } from "../store/website-preview-store";

const LOADING_TIMEOUT_MS = 8000;

interface PreviewState {
	isLoading: boolean;
	error: string | null;
}

type Action =
	| { type: "SET_LOADING"; payload: boolean }
	| { type: "SET_LOAD_SUCCESS" }
	| { type: "SET_LOAD_ERROR"; payload: string }
	| { type: "CLEAR_ERROR" }
	| { type: "RESET" };

const initialState: PreviewState = { isLoading: false, error: null };

function reducer(state: PreviewState, action: Action): PreviewState {
	switch (action.type) {
		case "SET_LOADING":
			return { ...state, isLoading: action.payload };
		case "SET_LOAD_SUCCESS":
			return { ...state, isLoading: false, error: null };
		case "SET_LOAD_ERROR":
			return { ...state, isLoading: false, error: action.payload };
		case "CLEAR_ERROR":
			return { ...state, error: null };
		case "RESET":
			return initialState;
		default:
			return state;
	}
}

export function useWebsitePreview() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const loadingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const inputUrl = useWebsitePreviewStore((s) => s.inputUrl);
	const currentUrl = useWebsitePreviewStore((s) => s.currentUrl);
	const setInputUrlStore = useWebsitePreviewStore((s) => s.setInputUrl);
	const setCurrentUrlStore = useWebsitePreviewStore((s) => s.setCurrentUrl);
	const resetStore = useWebsitePreviewStore((s) => s.reset);

	const clearLoadingTimeout = useCallback(() => {
		if (loadingTimeoutRef.current) {
			clearTimeout(loadingTimeoutRef.current);
			loadingTimeoutRef.current = null;
		}
	}, []);

	const handleIframeLoad = useCallback(() => {
		clearLoadingTimeout();
		dispatch({ type: "SET_LOAD_SUCCESS" });
	}, [clearLoadingTimeout]);

	const handleIframeError = useCallback(() => {
		clearLoadingTimeout();
		dispatch({
			type: "SET_LOAD_ERROR",
			payload:
				"Failed to load website. Make sure the URL is correct and the server is running.",
		});
	}, [clearLoadingTimeout]);

	useEffect(() => {
		if (state.isLoading && currentUrl) {
			clearLoadingTimeout();
			loadingTimeoutRef.current = setTimeout(() => {
				dispatch({
					type: "SET_LOAD_ERROR",
					payload:
						"Loading timeout — the website may be taking too long to respond.",
				});
			}, LOADING_TIMEOUT_MS);
			return clearLoadingTimeout;
		}
	}, [state.isLoading, currentUrl, clearLoadingTimeout]);

	const setInputUrl = useCallback(
		(url: string) => {
			setInputUrlStore(url);
			dispatch({ type: "CLEAR_ERROR" });
		},
		[setInputUrlStore],
	);

	const loadUrl = useCallback(() => {
		if (!inputUrl.trim()) {
			dispatch({
				type: "SET_LOAD_ERROR",
				payload: "Please enter a valid URL.",
			});
			return;
		}

		let formattedUrl = inputUrl.trim();
		if (
			!formattedUrl.startsWith("http://") &&
			!formattedUrl.startsWith("https://")
		) {
			formattedUrl = `http://${formattedUrl}`;
		}

		setCurrentUrlStore(formattedUrl);
		dispatch({ type: "SET_LOADING", payload: true });
		dispatch({ type: "CLEAR_ERROR" });

		if (iframeRef.current) {
			try {
				const url = new URL(formattedUrl);
				url.searchParams.set("_t", Date.now().toString());
				iframeRef.current.src = url.toString();
			} catch {
				iframeRef.current.src = `${formattedUrl}?_t=${Date.now()}`;
			}
		}
	}, [inputUrl, setCurrentUrlStore]);

	const refreshIframe = useCallback(() => {
		if (!currentUrl || !iframeRef.current) return;
		dispatch({ type: "SET_LOADING", payload: true });
		try {
			const url = new URL(currentUrl);
			url.searchParams.set("_refresh", Date.now().toString());
			iframeRef.current.src = url.toString();
		} catch {
			iframeRef.current.src = `${currentUrl}?_refresh=${Date.now()}`;
		}
	}, [currentUrl]);

	const openInNewTab = useCallback(() => {
		if (!currentUrl) return;
		window.open(currentUrl, "_blank", "noopener,noreferrer");
	}, [currentUrl]);

	const reset = useCallback(() => {
		clearLoadingTimeout();
		resetStore();
		dispatch({ type: "RESET" });
	}, [resetStore, clearLoadingTimeout]);

	return {
		inputUrl,
		currentUrl,
		isLoading: state.isLoading,
		error: state.error,
		iframeRef,
		setInputUrl,
		loadUrl,
		refreshIframe,
		openInNewTab,
		reset,
		handleIframeLoad,
		handleIframeError,
	};
}
