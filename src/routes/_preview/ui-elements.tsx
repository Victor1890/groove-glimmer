import { createFileRoute } from "@tanstack/react-router";
import { UIElements } from "@/modules/ui-elements/pages";

export const Route = createFileRoute("/_preview/ui-elements")({
	component: UIElements,
});
