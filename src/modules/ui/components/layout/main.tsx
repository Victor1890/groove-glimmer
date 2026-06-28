import type { ReactNode } from "react";
// import { Footer } from "../common/footer";
import { Navbar } from "../common/navbar";

interface MainLayoutProps {
	children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
	return (
		<>
			<header className="bg-white h-16 flex flex-col justify-center border border-solid fixed w-full top-0 z-20">
				<Navbar />
			</header>
			<div className="flex items-start flex-col lg:flex-row min-h-screen">
				{children}
			</div>
		</>
	);
}
