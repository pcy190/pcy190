import type { APIRoute } from 'astro';
import { lastUpdated } from '@/data/profile';

// <lastmod> is the hand-maintained content date from profile.ts, not the build
// date: Google ignores lastmod values it learns not to trust, and a date that
// moved on every deploy (README edits included) would teach it exactly that.
export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? 'https://ret2happy.com/';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}</loc>
    <lastmod>${lastUpdated}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
