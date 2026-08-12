"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckoutModal } from "@/components/checkout/CheckoutModal";
import { UpsellModal } from "@/components/checkout/UpsellModal";
import { useCartStore } from "@/lib/cart-store";
import { pickUpsellProduct } from "@/lib/crossSell";
import { submitOrder } from "@/lib/api";
import { generateEventId, getTrackingParams } from "@/lib/analytics/eventId";
import { trackPurchase } from "@/lib/analytics/events";
export function CheckoutFlow() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const getSlugs = useCartStore((s) => s.getSlugs);
  const getTotal = useCartStore((s) => s.getTotal);
  const openUpsell = useCartStore((s) => s.openUpsell);
  const isUpsellOpen = useCartStore((s) => s.isUpsellOpen);
  const closeUpsell = useCartStore((s) => s.closeUpsell);

  const [pendingCustomer, setPendingCustomer] = useState<{
    customer_name: string;
    customer_phone: string;
  } | null>(null);
  const [upsellProduct, setUpsellProduct] = useState(
    () => pickUpsellProduct(getSlugs())
  );
  const [submitting, setSubmitting] = useState(false);

  const handleCheckoutSuccess = useCallback(
    (data: { customer_name: string; customer_phone: string }) => {
      setPendingCustomer(data);
      setUpsellProduct(pickUpsellProduct(getSlugs()));
      openUpsell();
    },
    [getSlugs, openUpsell]
  );

  const placeOrder = async (upsellAccepted: boolean) => {
    if (!pendingCustomer || submitting) return;
    setSubmitting(true);

    const eventId = generateEventId();
    const tracking = getTrackingParams();
    const slugs = getSlugs();
    const upsell = upsellProduct;

    try {
      const result = await submitOrder({
        customer_name: pendingCustomer.customer_name,
        customer_phone: pendingCustomer.customer_phone,
        items: items.map((i) => ({ slug: i.slug, qty: i.qty })),
        upsell_item: upsellAccepted && upsell ? upsell.slug : null,
        upsell_accepted: upsellAccepted,
        event_id: eventId,
        ...tracking,
      });

      const contentIds = [...slugs];
      if (upsellAccepted && upsell) contentIds.push(upsell.slug);

      trackPurchase(result.order_id, result.order_total, contentIds, eventId);

      sessionStorage.setItem(
        `order-${result.order_id}`,
        JSON.stringify({ ...result, phone: pendingCustomer.customer_phone })
      );

      useCartStore.setState({ items: [], isUpsellOpen: false, isCheckoutOpen: false });
      router.push(`/thank-you?order=${result.order_id}`);
    } catch (e) {
      alert(e instanceof Error ? e.message : "حدث خطأ — حاولي مرة أخرى");
      setSubmitting(false);
    }
  };

  return (
    <>
      <CheckoutModal onSuccess={handleCheckoutSuccess} />
      <UpsellModal
        open={isUpsellOpen}
        product={upsellProduct}
        onAccept={() => placeOrder(true)}
        onDecline={() => placeOrder(false)}
      />
    </>
  );
}
