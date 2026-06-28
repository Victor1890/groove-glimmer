import type React from "react";

interface SectionProps extends React.ComponentProps<"section"> {
	label: string;
}

export function Section({ label, children, className }: SectionProps) {
	return (
		<section className={className}>
			<h2 className="text-xl font-medium mb-6">{label}</h2>
			{children}
		</section>
	);
}
