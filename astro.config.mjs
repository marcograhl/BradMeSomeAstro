import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'node:path';


// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
  vite: {
	  ssr: {
		  external: ["svgo"],
	  },
		resolve: {
			alias: {
				$src: path.resolve('./src'),
				$components: path.resolve('./src/components'),
				$layouts: path.resolve('./src/layouts'),
				$partials: path.resolve('./src/partials'),
				$includes: path.resolve('./src/includes'),
				$assets: path.resolve('./src/assets'),
				$data: path.resolve('./src/data'),
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