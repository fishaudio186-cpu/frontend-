"use client";

import { generateEventId } from "./eventId";

export function trackAddToCart(
  slug: string,
  value: number,
  qty: number,
  eventId = generateEventId()
) {
  if (typeof window === "undefined") return eventId;
  window.fbq?.("track", "AddToCart", {
    content_ids: [slug],
    content_type: "product",
    value,
    currency: "SAR",
    num_items: qty,
  }, { eventID: eventId });
  window.ttq?.track("AddToCart", {
    content_id: slug,
    value,
    currency: "SAR",
    quantity: qty,
  }, { event_id: eventId });
  return eventId;
}

export function trackInitiateCheckout(value: number, eventId = generateEventId()) {
  if (typeof window === "undefined") return eventId;
  window.fbq?.("track", "InitiateCheckout", { value, currency: "SAR" }, { eventID: eventId });
  window.ttq?.track("InitiateCheckout", { value, currency: "SAR" }, { event_id: eventId });
  return eventId;
}

export function trackPurchase(
  orderId: string,
  value: number,
  contentIds: string[],
  eventId: string
) {
  if (typeof window === "undefined") return;
  window.fbq?.(
    "track",
    "Purchase",
    {
      value,
      currency: "SAR",
      content_ids: contentIds,
      content_type: "product",
      order_id: orderId,
    },
    { eventID: eventId }
  );
  window.ttq?.track(
    "CompletePayment",
    { value, currency: "SAR", content_id: contentIds.join(",") },
    { event_id: eventId }
  );
  window.snaptr?.("track", "PURCHASE", {
    price: value,
    currency: "SAR",
    transaction_id: orderId,
    client_dedup_id: eventId,
    item_ids: contentIds,
  });
}

export function trackViewContent(slug: string, value: number) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "ViewContent", {
    content_ids: [slug],
    content_type: "product",
    value,
    currency: "SAR",
  });
}
