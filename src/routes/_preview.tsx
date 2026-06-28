import { createFileRoute } from "@tanstack/react-router";
import { PreviewPage } from "@/modules/preview/pages";
import { MainLayout } from "@/modules/ui/components/layout/main";

export const Route = createFileRoute("/_preview")({
	component: PreviewLayout,
});

function PreviewLayout() {
	return (
		<MainLayout>
			<PreviewPage />
		</MainLayout>
	);
}
