import { Check, Copy } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "@/modules/ui/components/button";
import { Input } from "@/modules/ui/components/input";
import { Separator } from "@/modules/ui/components/separator";

interface VariableEditorProps {
	variables: Record<string, string>;
	onUpdate: (name: string, value: string) => void;
}

const PALETTE_VARS = new Set([
	"--sea-ink",
	"--sea-ink-soft",
	"--lagoon",
	"--lagoon-deep",
	"--palm",
	"--sand",
	"--foam",
	"--surface",
	"--surface-strong",
	"--line",
	"--inset-glint",
	"--kicker",
	"--bg-base",
	"--header-bg",
	"--chip-bg",
	"--chip-line",
	"--link-bg-hover",
	"--hero-a",
	"--hero-b",
]);

const SIDEBAR_VARS = new Set([
	"--sidebar",
	"--sidebar-foreground",
	"--sidebar-primary",
	"--sidebar-primary-foreground",
	"--sidebar-accent",
	"--sidebar-accent-foreground",
	"--sidebar-border",
	"--sidebar-ring",
]);

function groupVariables(variables: Record<string, string>) {
	const groups: { label: string; vars: [string, string][] }[] = [
		{ label: "Colors", vars: [] },
		{ label: "Sidebar", vars: [] },
		{ label: "Charts", vars: [] },
		{ label: "Custom Palette", vars: [] },
		{ label: "Other", vars: [] },
	];

	const sorted = Object.entries(variables).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	for (const [name, value] of sorted) {
		if (SIDEBAR_VARS.has(name)) {
			groups[1].vars.push([name, value]);
		} else if (name.startsWith("--chart-")) {
			groups[2].vars.push([name, value]);
		} else if (PALETTE_VARS.has(name)) {
			groups[3].vars.push([name, value]);
		} else if (
			name === "--radius" ||
			name === "--font-sans" ||
			name === "--font-serif" ||
			name === "--font-mono"
		) {
			groups[0].vars.push([name, value]);
		} else {
			groups[4].vars.push([name, value]);
		}
	}

	return groups.filter((g) => g.vars.length > 0);
}

function generateCss(variables: Record<string, string>): string {
	const sorted = Object.entries(variables).sort(([a], [b]) =>
		a.localeCompare(b),
	);
	const lines = sorted.map(([name, value]) => `\t${name}: ${value};`);
	return `:root {\n${lines.join("\n")}\n}`;
}

export function VariableEditor({ variables, onUpdate }: VariableEditorProps) {
	const [copied, setCopied] = useState(false);
	const groups = groupVariables(variables);

	const handleCopy = useCallback(async () => {
		const css = generateCss(variables);
		await navigator.clipboard.writeText(css);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}, [variables]);

	const varCount = Object.keys(variables).length;

	return (
		<div className="flex flex-col h-full">
			<div className="flex items-center justify-between px-3 py-2">
				<span className="text-xs font-medium text-muted-foreground">
					CSS Variables ({varCount})
				</span>
				<Button
					variant="ghost"
					size="xs"
					onClick={handleCopy}
					className="gap-1.5"
				>
					{copied ? (
						<Check className="size-3 text-green-500" />
					) : (
						<Copy className="size-3" />
					)}
					{copied ? "Copied!" : "Copy CSS"}
				</Button>
			</div>
			<Separator />
			<div className="flex-1 overflow-y-auto">
				<div className="p-3 space-y-4">
					{groups.map((group) => (
						<div key={group.label}>
							<h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
								{group.label}
							</h4>
							<div className="space-y-1.5">
								{group.vars.map(([name, value]) => (
									<VariableRow
										key={name}
										name={name}
										value={value}
										onUpdate={onUpdate}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function VariableRow({
	name,
	value,
	onUpdate,
}: {
	name: string;
	value: string;
	onUpdate: (name: string, value: string) => void;
}) {
	const [localValue, setLocalValue] = useState(value);

	const commitValue = () => {
		if (localValue !== value) {
			onUpdate(name, localValue);
		}
	};

	const isColor =
		value.startsWith("#") ||
		value.startsWith("oklch") ||
		value.startsWith("hsl") ||
		value.startsWith("rgb") ||
		value.startsWith("rgba");

	return (
		<div className="flex items-center gap-2 group">
			<span
				className="text-xs font-mono text-muted-foreground truncate w-36 shrink-0"
				title={name}
			>
				{name}
			</span>
			<div className="relative flex-1 flex items-center">
				{isColor && (
					<div
						className="absolute left-1.5 size-3 rounded-sm border border-border/50 pointer-events-none z-10"
						style={{ backgroundColor: value }}
					/>
				)}
				<Input
					value={localValue}
					onChange={(e) => setLocalValue(e.target.value)}
					onBlur={commitValue}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							e.currentTarget.blur();
						}
					}}
					className={`h-7 text-xs font-mono ${isColor ? "pl-6" : ""}`}
				/>
			</div>
		</div>
	);
}
