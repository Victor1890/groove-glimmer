import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_preview/ui-elements")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/ui-elements"!</div>;
}
