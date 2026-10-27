// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dreamercrafter.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    prefixDefaultLocale: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
