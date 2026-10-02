import { ADSTERRA_ENABLED, ADSTERRA_CHOICE_KEY, ADSTERRA_SOCIAL_URL } from "../data/advertising";
import { initializeBanners } from "./adsterra-banners";

const hasGpc = () => (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
let current: { preferences: HTMLElement; dispose: () => void } | undefined;
let socialLoaded = false;

export function initializeAdsterra() {
  const preferences = document.querySelector<HTMLElement>("[data-adsterra-preferences]");
  if (current?.preferences === preferences) return;
  current?.dispose();
  current = undefined;
  if (!ADSTERRA_ENABLED || !preferences) return;
  const root = document.documentElement;
  const disableKey = "amaze-adsterra-disabled";
  try { if (sessionStorage.getItem(disableKey) === "true") root.setAttribute("data-adsterra-disabled", ""); }
  catch { /* Banner persistence separately fails closed. */ }
  const events = new AbortController();
  const desktop = matchMedia("(min-width: 1024px)");
  let allowed = false;
  const readChoice = () => {
    try { const choice = localStorage.getItem(ADSTERRA_CHOICE_KEY); allowed = choice === null || choice === "allow"; }
    catch { allowed = false; }
  };
  readChoice();
  const permitted = () => ADSTERRA_ENABLED && allowed && !hasGpc() && !root.hasAttribute("data-adsterra-disabled");
  const banners = initializeBanners(permitted);
  const update = () => {
    const gpc = hasGpc();
    // Preference state must never clear the independent publisher kill switch.
    root.toggleAttribute("data-adsterra-opt-out", !allowed || gpc);
    const enable = preferences.querySelector<HTMLButtonElement>("[data-adsterra-allow]");
    const disable = preferences.querySelector<HTMLButtonElement>("[data-adsterra-deny]");
    if (enable) enable.hidden = allowed || gpc;
    if (disable) disable.hidden = !allowed || gpc;
    const status = preferences.querySelector<HTMLElement>("[data-adsterra-status]");
    if (status) status.textContent = gpc ? "Ads are disabled by your browser's Global Privacy Control signal."
      : !permitted() ? "Adsterra advertising is disabled." : "Automatic advertising is on. You can turn it off here.";
    document.querySelectorAll<HTMLElement>("[data-adsterra-smartlink]").forEach(link => { link.hidden = !permitted(); });
    banners.update();
    // A parent-document Social Bar can install arbitrary listeners/timers. A full
    // reload is required to withdraw it completely, unlike isolated banner frames.
    if (socialLoaded && (!permitted() || !desktop.matches || preferences.dataset.socialBar !== "true")) { location.reload(); return; }
    if (socialLoaded || !permitted() || !desktop.matches || preferences.dataset.socialBar !== "true"
      || document.visibilityState !== "visible" || !document.hasFocus() || root.classList.contains("menu-open")) return;
    socialLoaded = true;
    const script = document.createElement("script");
    script.src = ADSTERRA_SOCIAL_URL;
    script.async = true;
    script.dataset.adsterraSocial = "true";
    document.body.append(script);
  };
  const choose = (value: boolean) => {
    if (hasGpc()) return;
    allowed = value;
    try { localStorage.setItem(ADSTERRA_CHOICE_KEY, value ? "allow" : "deny"); }
    catch { allowed = false; }
    update();
  };
  preferences.querySelector("[data-adsterra-allow]")?.addEventListener("click", () => choose(true), { signal: events.signal });
  preferences.querySelector("[data-adsterra-deny]")?.addEventListener("click", () => choose(false), { signal: events.signal });
  window.addEventListener("storage", event => { if (event.key === ADSTERRA_CHOICE_KEY || event.key === null) { readChoice(); update(); } }, { signal: events.signal });
  window.addEventListener("focus", update, { signal: events.signal });
  document.addEventListener("visibilitychange", update, { signal: events.signal });
  desktop.addEventListener("change", update, { signal: events.signal });
  const changes = new MutationObserver(() => {
    // Preserve an emergency runtime disable through Social Bar teardown reload.
    try { sessionStorage.setItem(disableKey, String(root.hasAttribute("data-adsterra-disabled"))); } catch { /* This document still stops. */ }
    update();
  });
  changes.observe(root, { attributes: true, attributeFilter: ["data-adsterra-disabled"] });
  const timer = window.setInterval(update, 1_000);
  current = { preferences, dispose() { clearInterval(timer); events.abort(); changes.disconnect(); banners.dispose(); } };
  update();
}

function disposeAdsterra() { current?.dispose(); current = undefined; }
window.addEventListener("pagehide", disposeAdsterra);
window.addEventListener("pageshow", event => {
  if (event.persisted && socialLoaded) { location.reload(); return; }
  initializeAdsterra();
});
document.addEventListener("astro:before-swap", disposeAdsterra);
document.addEventListener("astro:page-load", initializeAdsterra);
