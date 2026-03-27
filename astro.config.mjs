import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jmuhlenberg.github.io',
  base: '/portfolio-2026/',
  integrations: [sitemap()],
});