# Amaze Game Astro Version

Standalone Astro website for **Amaze Game**, a free online maze-fill puzzle where players slide through a grid and color every tile.

## What Is Included

- Astro static site structure copied from the reusable game template
- Main playable iframe at `/game/index.html`
- SEO-focused copy targeting the split keyword **Amaze Game**
- Home, play, games, categories, levels, blog, FAQ, about, contact, privacy, terms, and sitemap routes
- Generated Amaze Game favicon, app icon, Open Graph image, and category artwork
- Related browser puzzle game pages near the playable experience

## Development

```bash
npm install
npm run dev
```

Set production values in `.env`:

```bash
SITE_URL=https://amaze-game.com
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_GTM_ID=GTM-KP5R9GVF
```

Content and SEO live in `src/data/siteConfig.ts`, `src/data/pageContent.ts`, `src/data/articles.ts`, `src/data/gameData.ts`, and `src/data/seo.ts`.
