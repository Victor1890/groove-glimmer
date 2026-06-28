import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ui-elements')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ui-elements"!</div>
}
