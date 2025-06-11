import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: 'https://tristanjoshuaalba.github.io/tristanalba-portfolio',
	integrations: [
		mdx(),
		sitemap({
			changefreq: "daily",
			priority: 1,
			lastmod: new Date().toISOString().split("T")[0],
		}),
		tailwind(),
	],
	output: "static",
    build: {
        outDir: 'docs', // Specify output folder for GitHub Pages
    },
	// adapter: cloudflare(),
});
