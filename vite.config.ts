import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    root: "src/renderer",
    base: "./",
    plugins: [
        react()
    ],
    build: {
        outDir: "../../dist/renderer",
        emptyOutDir: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/renderer/main.html"),
            },
        },
    },
});
