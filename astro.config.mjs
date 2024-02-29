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
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind()],
});
