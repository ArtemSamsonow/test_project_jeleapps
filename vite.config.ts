import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

// Получаем env
dotenv.config();
const { VITE_PROD_PORT, VITE_DEV_PORT, VITE_HOST } = process.env;

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],

    base: "/test_project_jeleapps/",

    // Настройки production
    build: {
        rollupOptions: {
            output: {
                assetFileNames: "assets/[name].[ext]",
            },
        },
        cssCodeSplit: true,
        outDir: "build",
        assetsDir: "js",
    },
    // Настройки показа production
    preview: {
        port: Number(VITE_PROD_PORT),
        host: VITE_HOST,
    },

    // Настройки dev сборки
    server: {
        port: Number(VITE_DEV_PORT),
        host: VITE_HOST,
    },
});
