"use client";

let pixelsLoaded = false;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    ttq?: { track: (...args: unknown[]) => void; load: (id: string) => void; page: () => void };
    snaptr?: (...args: unknown[]) => void;
  }
}

function loadMetaPixel() {
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!id || window.fbq) return;
  const n = (window.fbq = function (...args: unknown[]) {
    if ((n as unknown as { callMethod?: (...a: unknown[]) => void }).callMethod) {
      (n as unknown as { callMethod: (...a: unknown[]) => void }).callMethod(...args);
    } else {
      (n as unknown as { queue: unknown[] }).queue.push(args);
    }
  }) as unknown as typeof window.fbq;
  if (!window._fbq) window._fbq = n;
  (n as unknown as { queue: unknown[] }).queue = [];
  (n as unknown as { loaded: boolean }).loaded = true;
  (n as unknown as { version: string }).version = "2.0";
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  window.fbq!("init", id);
  window.fbq!("track", "PageView");
}

function loadTikTokPixel() {
  const id = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
  if (!id || window.ttq) return;
  const w = window as Window & { TiktokAnalyticsObject?: string };
  w.TiktokAnalyticsObject = "ttq";
  const ttq = (window.ttq = { track: () => {}, load: () => {}, page: () => {} }) as NonNullable<Window["ttq"]>;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://analytics.tiktok.com/i18n/pixel/events.js";
  document.head.appendChild(s);
  ttq.load(id);
  ttq.page();
}

function loadSnapPixel() {
  const id = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID;
  if (!id || window.snaptr) return;
  const e = (window.snaptr = function (...args: unknown[]) {
    (e as unknown as { handleRequest?: (...a: unknown[]) => void }).handleRequest?.(...args);
  }) as unknown as typeof window.snaptr;
  (e as unknown as { queue: unknown[] }).queue = [];
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://sc-static.net/scevent.min.js";
  document.head.appendChild(s);
  window.snaptr!("init", id);
  window.snaptr!("track", "PAGE_VIEW");
}

export function initDeferredPixels() {
  if (pixelsLoaded || typeof window === "undefined") return;

  const load = () => {
    if (pixelsLoaded) return;
    pixelsLoaded = true;
    loadMetaPixel();
    loadTikTokPixel();
    loadSnapPixel();
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(load, { timeout: 3000 });
  } else {
    setTimeout(load, 3000);
  }

  ["scroll", "click", "touchstart"].forEach((ev) => {
    window.addEventListener(ev, load, { once: true, passive: true });
  });
}
