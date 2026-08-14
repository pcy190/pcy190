Visit ret2happy.com

Personal homepage, built with Astro and no client-side framework.

## Editing

- Page content: `src/pages/index.astro`
- Shared data (publications, awards, links): `src/data/profile.ts`
- `/sitemap.xml` and `/llms.txt` are generated at build time from
  `src/pages/sitemap.xml.ts` and `src/pages/llms.txt.ts`.

`llms.txt` is the plain-text summary for AI search agents. Its
publications, awards, and links are pulled from `profile.ts`
automatically, but the summary paragraph at the top is written by hand in
`src/pages/llms.txt.ts`. **After editing the bio on the page, update that
paragraph too** so the AI-facing summary stays in sync.

Two more hand-maintained pieces:

- **`lastUpdated` in `profile.ts`** feeds the sitemap `<lastmod>` and the
  ProfilePage `dateModified`. Bump it when page content changes (not for
  refactors or README edits), so crawlers see an honest change signal.
- **Icons and the social card** are derived from `public/avatar.jpg`. After
  replacing the avatar, regenerate them with ImageMagick:

      convert public/avatar.jpg -define icon:auto-resize=48,32,16 public/favicon.ico
      convert public/avatar.jpg -resize 180x180 public/apple-touch-icon.png

  and rebuild `public/og-card.png` (the 1200×630 Open Graph image) with the
  new photo.

## Commands

    npm install
    npm run dev     # local server
    npm run build   # static output to dist/
    npm run check   # types
