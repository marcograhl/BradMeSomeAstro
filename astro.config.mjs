import { defineConfig } from 'astro/config';
import path from 'node:path';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
		resolve: {
			alias: {
				$src: path.resolve('./src'),
				$components: path.resolve('./src/components'),
				$layouts: path.resolve('./src/_includes/layouts'),
				$partials: path.resolve('./src/_includes/partials'),
				$assets: path.resolve('./src/assets'),
				$data: path.resolve('./src/_data'),
				$work: path.resolve('./src/work'),
			},
		},
		server: {
			hmr: {
				clientPort: process.env.HMR_HOST ? 443: 24678,
				host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost"
			}
		}
	},
});