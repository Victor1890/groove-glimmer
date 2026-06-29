import { useCallback, useEffect, useRef } from "react";
import { useWebsitePreviewStore } from "../store/website-preview-store";

const MSG = {
	PING: "GROOVE_PING",
	PONG: "GROOVE_PONG",
	COLLECT_VARS: "GROOVE_COLLECT_VARS",
	VARS_RESPONSE: "GROOVE_VARS_RESPONSE",
	VAR_UPDATE: "GROOVE_VAR_UPDATE",
	VAR_UPDATE_BATCH: "GROOVE_VAR_UPDATE_BATCH",
	NAVIGATION_UPDATE: "GROOVE_NAVIGATION_UPDATE",
	EMBED_LOADED: "GROOVE_EMBED_LOADED",
	EMBED_ERROR: "GROOVE_EMBED_ERROR",
} as const;

interface UseIframeBridgeProps {
	iframeRef: React.RefObject<HTMLIFrameElement | null>;
	onNavigationUpdate?: (url: string) => void;
}

export function useIframeBridge({
	iframeRef,
	onNavigationUpdate,
}: UseIframeBridgeProps) {
	const setConnectionState = useWebsitePreviewStore(
		(s) => s.setConnectionState,
	);
	const setVariables = useWebsitePreviewStore((s) => s.setVariables);
	const connectionState = useWebsitePreviewStore((s) => s.connectionState);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const send = useCallback(
		(msg: { type: string; payload?: unknown }) => {
			const iframe = iframeRef.current;
			if (iframe?.contentWindow) {
				try {
					iframe.contentWindow.postMessage(msg, "*");
				} catch (e) {
					console.warn("Groove: Failed to postMessage:", e);
				}
			}
		},
		[iframeRef],
	);

	const collectVars = useCallback(() => {
		setConnectionState("collecting");
		send({ type: MSG.COLLECT_VARS });

		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			setConnectionState("error");
		}, 5000);
	}, [send, setConnectionState]);

	const sendVariableUpdate = useCallback(
		(name: string, value: string) => {
			send({ type: MSG.VAR_UPDATE, payload: { name, value } });
		},
		[send],
	);

	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			const iframe = iframeRef.current;
			if (!iframe || event.source !== iframe.contentWindow) return;

			const { type, payload } = event.data;
			if (typeof type !== "string") return;

			switch (type) {
				case MSG.PONG:
					if (timeoutRef.current) clearTimeout(timeoutRef.current);
					collectVars();
					break;

				case MSG.VARS_RESPONSE:
					if (timeoutRef.current) clearTimeout(timeoutRef.current);
					if (payload?.variables) {
						setVariables(payload.variables);
						setConnectionState("connected");
					} else {
						setConnectionState("error");
					}
					break;

				case MSG.EMBED_LOADED:
					send({ type: MSG.PING });
					setConnectionState("pinging");
					if (timeoutRef.current) clearTimeout(timeoutRef.current);
					timeoutRef.current = setTimeout(() => {
						setConnectionState("error");
					}, 5000);
					break;

				case MSG.NAVIGATION_UPDATE:
					if (payload?.url && onNavigationUpdate) {
						onNavigationUpdate(payload.url);
					}
					break;

				case MSG.EMBED_ERROR:
					setConnectionState("error");
					break;
			}
		};

		window.addEventListener("message", handleMessage);
		return () => {
			window.removeEventListener("message", handleMessage);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [
		iframeRef,
		collectVars,
		send,
		setVariables,
		setConnectionState,
		onNavigationUpdate,
	]);

	return { connectionState, sendVariableUpdate };
}
