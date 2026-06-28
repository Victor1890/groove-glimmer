import { CheckFill, CloseFill } from "@/modules/ui/icons";

interface ContrastLevelProps {
	type: "normal" | "large";
	contrast: string;
	isValid?: boolean;
}

export function ContrastLevel({
	contrast,
	type,
	isValid = false,
}: ContrastLevelProps) {
	return (
		<li>
			<span className="mb-2 text-black uppercase text-[0.75rem] leading-4.5">
				{type} text
			</span>
			<div className="flex items-center justify-between">
				<span className="text-[1.25rem] leading-7.5 font-bold">{contrast}</span>
				{isValid ? (
					<CheckFill className="text-2xl text-green-700" />
				) : (
					<CloseFill className="text-2xl text-red-700" />
				)}
			</div>
		</li>
	);
}
