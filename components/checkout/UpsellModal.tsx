"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { ProductImage } from "@/components/product/ProductImage";
import { UPSELL_PRICE, UNIT_PRICE } from "@/lib/pricing";
import type { Product } from "@/lib/products";

const TIMER = parseInt(process.env.NEXT_PUBLIC_UPSELL_TIMER_SECONDS || "15", 10);

export function UpsellModal({
  open,
  product,
  onAccept,
  onDecline,
}: {
  open: boolean;
  product: Product | null;
  onAccept: () => void;
  onDecline: () => void;
}) {
  const [seconds, setSeconds] = useState(TIMER);

  useEffect(() => {
    if (!open) {
      setSeconds(TIMER);
      return;
    }
    if (seconds <= 0) {
      onDecline();
      return;
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [open, seconds, onDecline]);

  if (!product) return null;

  return (
    <Modal open={open} onClose={onDecline}>
      <div className="pt-8 text-center">
        <p className="text-xs font-english tracking-widest text-brand-gold uppercase mb-2">
          One-Time Offer
        </p>
        <p className="font-bold text-lg mb-2 text-brand-plum">قطعة إضافية بسعر مخفّض</p>
        <p className="text-sm text-[#6B6B6B] mb-6">
          عرض لمرة واحدة مع هذا الطلب — {seconds} ثانية متبقية
        </p>

        <div className="flex flex-col items-center gap-4 mb-6">
          <ProductImage className="w-32 h-32 rounded-xl" showBadge />
          <div>
            <h3 className="font-bold text-xl">{product.nameAr}</h3>
            <p className="text-sm text-[#6B6B6B]">{product.taglineAr}</p>
            <p className="mt-2">
              <span className="line-through text-[#6B6B6B]">{UNIT_PRICE} ريال</span>{" "}
              <span className="font-extrabold text-2xl text-brand-plum">{UPSELL_PRICE} ريال</span>
            </p>
            <p className="text-sm text-brand-trust">
              وفّري {UNIT_PRICE - UPSELL_PRICE} ريال — تُضاف لطلبك الآن
            </p>
          </div>
        </div>

        <Button fullWidth onClick={onAccept} className="mb-3">
          نعم — أضيفي بـ {UPSELL_PRICE} ريال
        </Button>
        <Button variant="ghost" fullWidth onClick={onDecline}>
          لا شكراً — أكملي الطلب
        </Button>
      </div>
    </Modal>
  );
}
