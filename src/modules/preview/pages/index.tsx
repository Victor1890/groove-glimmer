import { Outlet } from "@tanstack/react-router";
import { type CSSProperties, useMemo } from "react";
import { bgVar, fgVar } from "@/modules/utils";
import { Sidebar } from "../components/sidebar";
import { ToggleButton } from "../components/toggle-button";
import { useColor } from "../hooks/use-color";
import { BG_DEFAULT_COLOR, FG_DEFAULT_COLOR } from "../store/color.store";

export function PreviewPage() {
	const { bgRgb, fgRgb } = useColor();

	const styles: CSSProperties = useMemo(
		() => ({
			marginInline: "auto",
			[fgVar]: fgRgb || FG_DEFAULT_COLOR,
			[bgVar]: bgRgb || BG_DEFAULT_COLOR,
		}),
		[fgRgb, bgRgb],
	);

	return (
		<div className="flex items-start justify-center w-full">
			<aside className="w-full lg:h-screen lg:w-auto sticky overflow-auto">
				<Sidebar />
			</aside>
			<section className="bg-tertiary flex-1 w-full overflow-hidden lg:overflow-auto h-[calc(100vh-1px)]">
				<div className="w-full px-4 md:px-6 md:pt-14">
					<div className="my-6" style={styles}>
						<div className="text-center mb-6">
							<ToggleButton
								pages={[
									{
										label: "Minimalist Page",
										url: "/minimalist-page",
									},
									{
										label: "UI Elements",
										url: "/ui-elements",
									},
								]}
							/>
						</div>
						<Outlet />
					</div>
				</div>
			</section>
		</div>
	);
}
