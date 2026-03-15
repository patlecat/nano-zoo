import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "node",
      include: ["app/**/*.{test,spec}.{ts,tsx}"],
      exclude: ["**/node_modules/**", "**/build/**", ".react-router/**"],
    },
  })
);
