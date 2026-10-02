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

## Adsterra integration

`src/data/advertising.ts` owns the Amaze-only codes, page eligibility and central switch. Advertising is enabled by default. Set `PUBLIC_ADSTERRA_ENABLED=false` and rebuild to remove all placements and local ad endpoints. For an emergency runtime pause, set `data-adsterra-disabled` on `<html>`; remove it to resume. This independent switch is remembered for the tab and is never cleared by a visitor preference update.

- The 728×90 leaderboard appears once on eligible game, directory and guide pages, only at viewport widths of at least 800px and when its container fits 728px. Home and Play place it after the game area. Other eligible pages place it after the content.
- The single 160×600 rail appears beside the homepage game from 1200px, centered in its existing 230px right column. The three right-column game links move into a row below; the game/canvas width and height are unchanged. On `/play/`, the rail remains in the existing right outer margin from 1680px with a 24px gap and the original centered 1280px game shell. There is one skyscraper key per page, no second rail and no mobile banner.
- Social Bar is restricted to desktop reading/directory pages (1024px minimum), never home, Play, related-game embeds, legal, support or parent-information pages. It loads once and does not refresh. Withdrawing a loaded Social Bar requires a full reload to destroy its parent-document listeners and timers. Banner-only game pages do not reload when opting out.
- The exact supplied Smartlink is a footer link labeled “Sponsored offer,” activated only by an intentional click and opened in a new tab. No Popunder or automatic redirect is installed.

Advertising loads automatically when eligible. The footer's Advertising preferences allow opting out and re-enabling. `amaze-adsterra-choice-v1` in local storage preserves the visitor's choice: only an absent value or `allow` permits loading; all other saved values deny. GPC overrides that choice. Storage access errors fail closed. Preferences apply to Adsterra; the pre-existing game host and analytics are independent.

`src/scripts/adsterra-banners.ts` assigns each placement a fresh, independent, uniform integer-millisecond delay from 37,000 through 50,000 per cycle. Time counts only while at least 50% of the creative is onscreen, the window is focused, the document is visible, the menu is closed and advertising is allowed. Late/throttled timer gaps are discarded. The actual callback can be delayed by browser scheduling, never accelerated to catch up. Both elapsed eligible time and the sampled cooldown persist per key in session storage across resizes, navigation and BFCache restoration. Invalid or unavailable session storage prevents banner requests.

Each banner runs the supplied synchronous `atOptions` and `invoke.js` tags inside its own local `/adsterra/[key].html` document. A one-use parent grant prevents standalone endpoint visits, cloned markup and unsolicited frame reloads from issuing extra requests. Refresh first destroys the old browsing context, including its timers/listeners/provider child frames. Failed scripts stop for that slot; they are not retried in a burst. Social Bar, sponsored links, games and pages are never refreshed by the banner timer. The local ad endpoints are noindex and excluded from the sitemap.

### Deployment limitations

The unchanged CSP in **both `Caddyfile` and `public/_headers` blocks Adsterra's script hosts**, so deployments enforcing those headers will not deliver these ads. Security-header changes were expressly excluded from this task. Do not treat an application-level mock test as proof of deployment readiness.

The owner requested the 37–50 second timing on October 2, 2026 and reported Ema's specific approval the prior day. That report is the authorization used here; it has not been independently verified. Separate provider permission for the local wrapper iframe approach has **not** been evidenced. Live ad delivery, creative suitability, impressions, revenue and payment are **not verified**. All automated browser QA intercepts external traffic and uses mocked ads and a mocked game host.

The existing `/game/index.html` embeds Playgama's `connect-the-dot` game. Its source, URL and game/canvas sizing are untouched. QA verifies frame preservation and mock input/fullscreen behavior, not the remote game's live implementation. The existing footer also overflows at 1024px; that unrelated layout issue is unchanged.

The original homepage had no skyscraper markup; CSP was not the cause of that missing placement. At 1280px/1366px/1440px the original game iframe widths are 721.625px/807.625px/881.625px, with a 230px recommendation column available to its right. The added rail reuses that space without narrowing the game. At 1024px the existing three-track layout already extends to 1157px: a 640px game shell plus two 230px recommendation tracks and gaps. Below the 1200px rail breakpoint it is left unchanged; the smallest further layout adjustment to fit a side ad there would be moving both recommendation tracks below the unchanged 640px game and a 160px rail. On the dedicated Play page, a 1280px game, 160px ad, 24px gap and 16px outer margins require at least 1496px even if the combined row is recentered; retaining the existing centered game requires 1680px. No narrow-screen skyscraper is silently relocated below the iframe.
