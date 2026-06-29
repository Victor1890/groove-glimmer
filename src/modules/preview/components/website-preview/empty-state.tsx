import { Globe, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/modules/ui/components/button";
import { Input } from "@/modules/ui/components/input";
import { cn } from "@/modules/ui/utils";

const SCRIPT_URL = "live-preview.min.js";

const SNIPPETS = [
	{
		id: "script",
		label: "Script Tag",
		code: `<!-- Add inside <head> -->\n<script src="${SCRIPT_URL}" async></script>`,
	},
	{
		id: "next-app",
		label: "Next.js (App)",
		code: `// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="${SCRIPT_URL}" />
      </head>
      <body>{children}</body>
    </html>
  )
}`,
	},
	{
		id: "next-pages",
		label: "Next.js (Pages)",
		code: `// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="${SCRIPT_URL}" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}`,
	},
	{
		id: "vite",
		label: "Vite",
		code: `<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <script src="${SCRIPT_URL}" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>`,
	},
	{
		id: "remix",
		label: "Remix",
		code: `// app/root.tsx
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <script src="${SCRIPT_URL}" />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}`,
	},
];

interface EmptyStateProps {
	inputUrl: string;
	onInputChange: (url: string) => void;
	onLoad: () => void;
}

export function EmptyState({
	inputUrl,
	onInputChange,
	onLoad,
}: EmptyStateProps) {
	const [activeTab, setActiveTab] = useState("script");
	const [copied, setCopied] = useState(false);

	const activeSnippet = SNIPPETS.find((s) => s.id === activeTab) ?? SNIPPETS[0];

	const handleCopy = async (text: string) => {
		await navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="scrollbar-thin relative flex size-full flex-col overflow-y-auto p-4 py-8">
			<div className="text-muted-foreground mx-auto my-auto flex w-full max-w-xl min-w-0 flex-col items-center justify-center space-y-6">
				<div className="flex items-center gap-3">
					<div className="bg-muted outline-border/50 flex size-14 flex-col items-center justify-center rounded-full outline">
						<Globe className="text-foreground size-6" />
					</div>
					<X className="text-muted-foreground size-5" />
					<div className="bg-muted outline-border/50 flex size-14 flex-col items-center justify-center rounded-full outline">
						<span className="text-foreground font-bold text-sm">GS</span>
					</div>
				</div>

				<h3 className="text-foreground text-center text-lg font-medium">
					Preview your Website
				</h3>

				<div className="text-muted-foreground space-y-2 text-left text-sm">
					<div className="flex gap-2">
						<span className="text-foreground font-semibold">1.</span>
						<span>
							Add the script below to your website&apos;s{" "}
							<code className="code-inline">&lt;head&gt;</code>
						</span>
					</div>
					<div className="flex gap-2">
						<span className="text-foreground font-semibold">2.</span>
						<span>
							Paste your website&apos;s URL (e.g.{" "}
							<code className="code-inline">http://localhost:5173</code>) above
						</span>
					</div>
				</div>

				<div className="w-full rounded-lg border p-2">
					<div className="scrollbar-thin flex items-center overflow-x-auto rounded-lg border p-1 mb-2">
						{SNIPPETS.map((snippet) => (
							<Button
								key={snippet.id}
								variant="ghost"
								size="xs"
								className={cn(
									"h-7 px-3 text-xs font-medium",
									activeTab === snippet.id &&
										"bg-accent text-accent-foreground",
								)}
								onClick={() => setActiveTab(snippet.id)}
							>
								{snippet.label}
							</Button>
						))}
					</div>

					<div className="bg-background scrollbar-thin max-h-60 overflow-y-auto rounded-lg border relative group">
						<pre className="p-4 text-xs overflow-x-auto">
							<code>{activeSnippet.code}</code>
						</pre>
						<Button
							variant="ghost"
							size="xs"
							className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
							onClick={() => handleCopy(activeSnippet.code)}
						>
							{copied ? "Copied!" : "Copy"}
						</Button>
					</div>
				</div>

				<div className="w-full pt-2">
					<div className="relative">
						<Globe className="text-muted-foreground absolute top-0 left-2 size-4 translate-y-1/2" />
						<Input
							type="url"
							placeholder="Enter your website URL (e.g. http://localhost:5173)"
							value={inputUrl}
							onChange={(e) => onInputChange(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter" && inputUrl.trim()) onLoad();
							}}
							className="pl-8 pr-8"
						/>
						{inputUrl && (
							<Button
								variant="ghost"
								size="icon"
								onClick={() => onInputChange("")}
								className="absolute top-0 right-0 size-9 translate-y-0"
							>
								<X className="text-muted-foreground size-3.5" />
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
