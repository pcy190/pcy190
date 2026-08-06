import type { APIRoute } from 'astro';

// Generated at build time so <lastmod> reflects the latest deploy, which
// nudges Google to re-crawl after each change.
export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? 'https://ret2happy.com/';
  const lastmod = new Date().toISOString().slice(0, 10);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
