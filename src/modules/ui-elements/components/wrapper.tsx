import { cn } from "@/modules/ui/utils";

interface ContainerProps extends React.ComponentProps<"article"> {}

export function Wrapper({ children, className, ...props }: ContainerProps) {
	return (
		<article
			className={cn("border-solid border rounded-xl", className)}
			{...props}
		>
			{children}
		</article>
	);
}
