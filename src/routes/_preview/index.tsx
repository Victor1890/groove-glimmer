import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_preview/")({
	component: PreviewIndex,
});

function PreviewIndex() {
	return null;
}
