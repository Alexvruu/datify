// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';
import { SITE_URL } from './site.config.mjs';

export default defineConfig({
  site: SITE_URL,
  // Ancienne URL de la page Offres, conservée pour ne pas casser les liens existants.
  // /services -> /offres est gere en 301 par vercel.json.
  // Pas de redirection Astro ici : elle generait une page stub jamais servie.
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({ filter: (page) => !/\/audit(-b)?\/?$/.test(page) }), mdx()]
});