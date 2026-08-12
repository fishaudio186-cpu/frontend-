export function generateEventId(): string {
  return crypto.randomUUID();
}

export function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : undefined;
}

export function getTrackingParams(): {
  fbp?: string;
  fbc?: string;
  ttclid?: string;
  sc_click_id?: string;
  utm_source?: string;
  utm_campaign?: string;
} {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    fbp: getCookie("_fbp"),
    fbc: getCookie("_fbc"),
    ttclid: params.get("ttclid") || getCookie("ttclid") || undefined,
    sc_click_id: params.get("sc_click_id") || undefined,
    utm_source: params.get("utm_source") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
  };
}
