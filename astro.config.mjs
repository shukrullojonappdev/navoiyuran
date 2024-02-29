import { defineConfig } from "astro/config";
// import node from "@astrojs/node";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
  output: "hybrid",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  integrations: [tailwind()],
});
