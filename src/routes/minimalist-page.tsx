import { createFileRoute } from "@tanstack/react-router";
import { MinimalistPage } from "@/modules/minimalist/pages";

export const Route = createFileRoute("/minimalist-page/")({
	component: MinimalistPage,
});
