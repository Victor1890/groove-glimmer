import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/modules/ui/components/button";

interface ItemProps {
	label: string;
	url: string;
}

interface ToggleButtonProps {
	pages: ItemProps[];
}

export function ToggleButton({ pages }: ToggleButtonProps) {
	return (
		<div className="p-1 inline-block rounded-lg border border-solid bg-white">
			{pages.map((page) => (
				<ToggleButtonItem key={page.label} {...page} />
			))}
		</div>
	);
}

function ToggleButtonItem({ label, url }: ItemProps) {
	const location = useLocation();

	return (
		<Button
			asChild
			variant={location.pathname === url ? "default" : "ghost"}
			className="[&.active]:font-semibold text-colors-text-secondary bg-white"
		>
			<Link to={url}>{label}</Link>
		</Button>
	);
}
