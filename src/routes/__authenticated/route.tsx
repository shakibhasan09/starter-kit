import { Layout } from "@/components/shared/layout";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/__authenticated")({
    component: () => (
        <Layout>
            <Outlet />
        </Layout>
    ),
});
