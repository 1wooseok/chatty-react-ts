import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';
import ViteFaviconsPlugin from 'vite-plugin-favicon';
import path from 'path';

const __dirname = path.resolve();

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		tsconfigPaths(),
		// ViteFaviconsPlugin(),
		ViteFaviconsPlugin({
			logo: 'src/assets/logo.png',
			favicons: {
				path: 'assets/',
			},
		}),
	],
	resolve: {
		alias: [
			{ find: '~', replacement: path.resolve(__dirname, 'src') },
			{
				find: '~/components',
				replacement: path.resolve(__dirname, 'src/components'),
			},
			{
				find: '~/utils',
				replacement: path.resolve(__dirname, 'src/utils'),
			},
			{
				find: '~/styles',
				replacement: path.resolve(__dirname, 'src/styles'),
			},
			{
				find: '~/services',
				replacement: path.resolve(__dirname, 'src/services'),
			},
			{
				find: '~/hooks',
				replacement: path.resolve(__dirname, 'src/hooks'),
			},
			{
				find: '~/types',
				replacement: path.resolve(__dirname, 'src/types'),
			},
			{
				find: '~/constants',
				replacement: path.resolve(__dirname, 'src/constants'),
			},
			{
				find: '~/pages',
				replacement: path.resolve(__dirname, 'src/pages'),
			},
			{
				find: '~/api',
				replacement: path.resolve(__dirname, 'src/api'),
			},
		],
	},
});
