import { createFileRoute } from "@tanstack/react-router";
import { MinimalistPage } from "@/modules/minimalist/pages";

export const Route = createFileRoute("/_preview/minimalist-page")({
	component: MinimalistPage,
});
