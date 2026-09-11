// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';
import { SITE_URL } from './site.config.mjs';

export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({ filter: (page) => !/\/audit(-b)?\/?$/.test(page) }), mdx()]
});