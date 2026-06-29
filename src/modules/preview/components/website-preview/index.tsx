import { ExternalLink, Globe, RefreshCw, X } from "lucide-react";
import { useCallback } from "react";
import { Button } from "@/modules/ui/components/button";
import { Input } from "@/modules/ui/components/input";
import { cn } from "@/modules/ui/utils";
import { useIframeBridge } from "../../hooks/use-iframe-bridge";
import { useWebsitePreview } from "../../hooks/use-website-preview";
import { useWebsitePreviewStore } from "../../store/website-preview-store";
import { ToggleButton } from "../toggle-button";
import { EmptyState } from "./empty-state";
import { VariableEditor } from "./variable-editor";

const TOGGLE_PAGES = [
	{ label: "Minimalist Page", url: "/minimalist-page" },
	{ label: "UI Elements", url: "/ui-elements" },
	{ label: "Your Website", url: "/website-preview" },
];

export function WebsitePreview() {
	const {
		inputUrl,
		currentUrl,
		isLoading,
		error,
		iframeRef,
		setInputUrl,
		loadUrl,
		refreshIframe,
		openInNewTab,
		reset,
		handleIframeLoad,
		handleIframeError,
	} = useWebsitePreview();

	const setCurrentIframeUrl = useWebsitePreviewStore(
		(s) => s.setCurrentIframeUrl,
	);
	const currentIframeUrl = useWebsitePreviewStore((s) => s.currentIframeUrl);

	const handleNavigationUpdate = useCallback(
		(url: string) => {
			setCurrentIframeUrl(url);
		},
		[setCurrentIframeUrl],
	);

	const { connectionState, sendVariableUpdate } = useIframeBridge({
		iframeRef,
		onNavigationUpdate: handleNavigationUpdate,
	});
	const variables = useWebsitePreviewStore((s) => s.variables);
	const updateVariable = useWebsitePreviewStore((s) => s.updateVariable);

	const handleVariableUpdate = (name: string, value: string) => {
		updateVariable(name, value);
		sendVariableUpdate(name, value);
	};

	const handleReset = () => {
		reset();
		setInputUrl("");
	};

	const displayUrl = currentIframeUrl || currentUrl;

	if (!currentUrl && !error) {
		return (
			<div className="flex items-start justify-center w-full h-[calc(100vh-1px)]">
				<div className="w-full">
					<div className="text-center my-6">
						<ToggleButton pages={TOGGLE_PAGES} />
					</div>
					<EmptyState
						inputUrl={inputUrl}
						onInputChange={setInputUrl}
						onLoad={loadUrl}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="flex items-start justify-center w-full h-[calc(100vh-1px)]">
			<aside className="w-full lg:h-screen lg:w-auto sticky overflow-auto border-r border-border">
				<VariableEditor variables={variables} onUpdate={handleVariableUpdate} />
			</aside>
			<section className="bg-tertiary flex-1 w-full overflow-hidden lg:overflow-auto h-[calc(100vh-1px)] flex flex-col">
				{/* Toggle + URL bar */}
				<div className="border-b border-border px-4 py-2 flex items-center gap-3">
					<ToggleButton pages={TOGGLE_PAGES} />
					<div className="relative max-w-xl flex-1">
						<Globe className="text-muted-foreground absolute top-0 left-2 size-4 translate-y-1/2" />
						<Input
							type="url"
							placeholder="Enter website URL (e.g. http://localhost:5173)"
							value={inputUrl}
							onChange={(e) => setInputUrl(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter" && inputUrl.trim()) loadUrl();
							}}
							className={cn("pl-8 text-sm h-8", currentUrl && "pr-8")}
						/>
						{displayUrl && (
							<Button
								variant="ghost"
								size="icon"
								onClick={handleReset}
								className="absolute top-0 right-0 size-8"
							>
								<X className="text-muted-foreground size-3.5" />
							</Button>
						)}
					</div>
					<Button
						variant="outline"
						size="icon"
						onClick={refreshIframe}
						disabled={isLoading || !currentUrl}
						className="size-8 shadow-none"
					>
						<RefreshCw
							className={cn("size-3.5", isLoading && "animate-spin")}
						/>
					</Button>
					<Button
						variant="outline"
						size="icon"
						onClick={openInNewTab}
						disabled={!currentUrl || isLoading}
						className="size-8 shadow-none"
					>
						<ExternalLink className="size-3.5" />
					</Button>
					{connectionState !== "idle" && (
						<span className="text-xs text-muted-foreground hidden sm:block">
							{connectionState === "connected" && "● Connected"}
							{connectionState === "pinging" && "○ Connecting..."}
							{connectionState === "collecting" && "○ Loading variables..."}
							{connectionState === "error" && "● Script not found"}
						</span>
					)}
				</div>

				{/* Iframe */}
				<div className="flex-1 relative">
					{isLoading && (
						<div className="absolute inset-0 bg-muted flex items-center justify-center z-10">
							<div className="flex flex-col items-center gap-3">
								<div className="size-6 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin" />
								<span className="text-muted-foreground text-sm">
									Loading website
								</span>
							</div>
						</div>
					)}
					{error && (
						<div className="absolute inset-0 bg-muted flex items-center justify-center z-10">
							<div className="flex flex-col items-center gap-3 text-center p-4">
								<div className="bg-destructive/10 flex size-12 items-center justify-center rounded-full">
									<Globe className="text-destructive size-6" />
								</div>
								<div>
									<h3 className="text-foreground font-medium">
										Error Loading Website
									</h3>
									<p className="text-muted-foreground text-sm mt-1">{error}</p>
								</div>
								<Button variant="outline" size="sm" onClick={refreshIframe}>
									Retry
								</Button>
							</div>
						</div>
					)}
					<iframe
						ref={iframeRef}
						src={currentUrl}
						title="Website Preview"
						className="size-full border-0"
						onLoad={handleIframeLoad}
						onError={handleIframeError}
						sandbox="allow-scripts allow-same-origin"
						loading="lazy"
					/>
				</div>
			</section>
		</div>
	);
}
