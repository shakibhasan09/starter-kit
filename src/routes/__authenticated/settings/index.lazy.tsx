import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/__authenticated/settings/")({
    component: () => <div>Hello /__authenticated/settings/!</div>,
});
