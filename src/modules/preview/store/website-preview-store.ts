import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ConnectionState =
	| "idle"
	| "pinging"
	| "collecting"
	| "connected"
	| "error";

interface WebsitePreviewStore {
	inputUrl: string;
	currentUrl: string;
	currentIframeUrl: string;
	variables: Record<string, string>;
	connectionState: ConnectionState;
	setInputUrl: (url: string) => void;
	setCurrentUrl: (url: string) => void;
	setCurrentIframeUrl: (url: string) => void;
	setVariables: (vars: Record<string, string>) => void;
	updateVariable: (name: string, value: string) => void;
	setConnectionState: (state: ConnectionState) => void;
	reset: () => void;
}

export const useWebsitePreviewStore = create<WebsitePreviewStore>()(
	persist(
		(set) => ({
			inputUrl: "",
			currentUrl: "",
			currentIframeUrl: "",
			variables: {},
			connectionState: "idle" as ConnectionState,
			setInputUrl: (url) => set({ inputUrl: url }),
			setCurrentUrl: (url) => set({ currentUrl: url }),
			setCurrentIframeUrl: (url) => set({ currentIframeUrl: url }),
			setVariables: (vars) => set({ variables: vars }),
			updateVariable: (name, value) =>
				set((state) => ({
					variables: { ...state.variables, [name]: value },
				})),
			setConnectionState: (state) => set({ connectionState: state }),
			reset: () =>
				set({
					inputUrl: "",
					currentUrl: "",
					currentIframeUrl: "",
					variables: {},
					connectionState: "idle",
				}),
		}),
		{
			name: "website-preview-storage",
			partialize: (state) => ({
				inputUrl: state.inputUrl,
				currentUrl: state.currentUrl,
			}),
		},
	),
);
