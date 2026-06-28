import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/modules/ui/components/button";
import { cn } from "@/modules/ui/utils";

interface ItemProps {
	label: string;
	url: string;
}

interface ToggleButtonProps {
	pages: ItemProps[];
}

export function ToggleButton({ pages }: ToggleButtonProps) {
	return (
		<div className="p-1 inline-block rounded-lg border border-[#e5e7eb] bg-white">
			{pages.map((page) => (
				<ToggleButtonItem key={page.label} {...page} />
			))}
		</div>
	);
}

function ToggleButtonItem({ label, url }: ItemProps) {
	const location = useLocation();

	const isActive = location.pathname === url;

	return (
		<Button
			asChild
			className={cn(
				"[&.active]:font-semibold text-colors-text-secondary bg-white border-none",
				!isActive && "opacity-45",
			)}
		>
			<Link to={url}>{label}</Link>
		</Button>
	);
}
