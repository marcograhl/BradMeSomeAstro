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
				$images: path.resolve('./src/images')
			},
		},

		server: {
			// configure vite for HMR with Gitpod
			hmr: process.env.GITPOD_WORKSPACE_URL
			  ? {
				  // removes the protocol and replaces it with the port we're connecting to
				  host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '3000-'),
				  protocol: 'wss',
				  clientPort: 443
				}
			  : true
		  }
	},
});