import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import { DOMAIN } from "#/configs/portfolio";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        concurrency: 2,
        retryCount: 2,
        maxRedirects: 5,
        failOnError: true,
        filter: (page) => page.path !== "/api/markdown",
        onSuccess: ({ page }) => {
          console.log(`Prerendered page: ${page.path}`);
        }
      },
      pages: [{ path: "/api/markdown", prerender: { enabled: false } }],
      sitemap: {
        enabled: false,
        host: DOMAIN
      }
    }),
    nitro(),
    viteReact()
  ]
});

export default config;
