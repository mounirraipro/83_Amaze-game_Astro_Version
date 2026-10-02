// Amaze-only publisher codes. Set false (or PUBLIC_ADSTERRA_ENABLED=false) and rebuild to disable all formats.
export const ADSTERRA_ENABLED = (import.meta.env.PUBLIC_ADSTERRA_ENABLED ?? "true") === "true";
export const ADSTERRA_CHOICE_KEY = "amaze-adsterra-choice-v1";
export const ADSTERRA_HISTORY_KEY = "amaze-adsterra-refresh-v1";
export const ADSTERRA_SOCIAL_URL = "https://pl31604566.profitableratecpmnetwork.com/f2/cf/a9/f2cfa942adea1d2768c0532af48d8314.js";
export const ADSTERRA_SMARTLINK = "https://www.profitableratecpmnetwork.com/bz90csyy?key=1d5cf275c2b4140233f39667b94a409b";
export const ADSTERRA_BANNER_UNITS = {
  leaderboard: { key: "4e6fca9d707c5925156364062a63ac60", width: 728, height: 90 },
  skyscraper: { key: "32f3471215092643f7c96fde894144e0", width: 160, height: 600 },
} as const;

// No advertising on legal, support or parent-information pages. No Social Bar on any game page.
export function advertisingForPath(path: string) {
  const route = path.replace(/\/+$/, "") || "/";
  const reading = ["/blog", "/games", "/categories", "/levels", "/how-to-play", "/strategy", "/difficulty-guide", "/game-mechanics"].includes(route)
    || /^\/(blog|categories|levels)\//.test(route);
  const game = route === "/" || route === "/play" || route.startsWith("/games/");
  return { enabled: ADSTERRA_ENABLED && (reading || game), socialBar: ADSTERRA_ENABLED && reading };
}
