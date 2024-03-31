import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "sonner";

export const Route = createRootRoute({
    component: () => (
        <>
            <Toaster />
            <Outlet />
            {import.meta.env.VITE_ENVIROMENT === "local" && (
                <TanStackRouterDevtools />
            )}
        </>
    ),
});
