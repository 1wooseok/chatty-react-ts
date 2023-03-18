import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths(), tailwindcss()],
});
