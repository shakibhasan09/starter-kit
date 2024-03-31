/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(), TanStackRouterVite()],
    test: {
        exclude: ["**/node_modules/**", "**/dist/**"],
        globals: true,
        environment: "jsdom",
    },
});
