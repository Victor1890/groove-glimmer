import { createFileRoute } from "@tanstack/react-router";
import { WebsitePreview } from "@/modules/preview/components/website-preview";

export const Route = createFileRoute("/_preview/website-preview")({
	component: WebsitePreview,
});
