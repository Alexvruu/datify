import type { APIRoute } from 'astro'
import { SITE_URL } from '../../site.config.mjs'

// Généré depuis site.config.mjs : le sitemap ne peut plus pointer vers un domaine mort.
export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', SITE_URL).toString()}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  )
