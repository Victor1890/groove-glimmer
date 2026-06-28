import { GithubIcon, Logo } from "@/modules/ui/icons";

export function Navbar() {
	return (
		<div className="max-w-full mx-0 px-4 md:px-6">
			<nav className="flex items-center justify-between flex-wrap gap-5">
				<div className="font-bold flex items-center">
					<Logo className="w-13" />
					Groove Glimmer
				</div>
				<div className="flex flex-row items-center gap-5">
					<a
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Star on Github"
						className="inline-flex font-medium"
						href={"https://github.com/Victor1890/groove-glimmer"}
					>
						<GithubIcon width={22} height={22} className="sm:mr-2 text-base" />
						<span className="hidden sm:block">Github</span>
					</a>
				</div>
			</nav>
		</div>
	);
}
