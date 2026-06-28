import { createFileRoute } from "@tanstack/react-router";
import { PreviewPage } from "@/modules/preview/pages";
import { MainLayout } from "@/modules/ui/components/layout/main";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<MainLayout>
			<PreviewPage />
		</MainLayout>
	);
}
