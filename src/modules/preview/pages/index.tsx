import { Outlet, useLocation } from "@tanstack/react-router";
import { type CSSProperties, useMemo } from "react";
import { bgVar, fgVar } from "@/modules/utils";
import { Sidebar } from "../components/sidebar";
import { ToggleButton } from "../components/toggle-button";
import { useColor } from "../hooks/use-color";
import { BG_DEFAULT_COLOR, FG_DEFAULT_COLOR } from "../store/color.store";

const TOGGLE_PAGES = [
	{ label: "Minimalist Page", url: "/minimalist-page" },
	{ label: "UI Elements", url: "/ui-elements" },
	{ label: "Your Website", url: "/website-preview" },
];

export function PreviewPage() {
	const location = useLocation();
	const { bgRgb, fgRgb } = useColor();

	const isWebsitePreview = location.pathname === "/website-preview";

	const styles: CSSProperties = useMemo(
		() => ({
			marginInline: "auto",
			[fgVar]: fgRgb || FG_DEFAULT_COLOR,
			[bgVar]: bgRgb || BG_DEFAULT_COLOR,
		}),
		[fgRgb, bgRgb],
	);

	if (isWebsitePreview) {
		return (
			<div className="flex items-start justify-center w-full">
				<Outlet />
			</div>
		);
	}

	return (
		<div className="flex items-start justify-center w-full">
			<aside className="w-full lg:h-screen lg:w-auto sticky overflow-auto">
				<Sidebar />
			</aside>
			<section className="bg-tertiary flex-1 w-full overflow-hidden lg:overflow-auto h-[calc(100vh-1px)]">
				<div className="w-full px-4 md:px-6 md:pt-14">
					<div className="my-6" style={styles}>
						<div className="text-center mb-6">
							<ToggleButton pages={TOGGLE_PAGES} />
						</div>
						<Outlet />
					</div>
				</div>
			</section>
		</div>
	);
}
