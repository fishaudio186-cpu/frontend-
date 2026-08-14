"use client";

import { Drawer } from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/lib/cart-store";
import { calculateLineTotal, bundleSavings } from "@/lib/pricing";
import { HERO_SLUG } from "@/lib/products";
import { trackInitiateCheckout } from "@/lib/analytics/events";
import { Minus, Plus, Trash2, ShieldCheck, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCT_IMAGES } from "@/lib/product-images";

export function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    openCheckout,
    removeItem,
    updateQty,
    getTotal,
  } = useCartStore();

  const total = getTotal();

  const handleCheckout = () => {
    trackInitiateCheckout(total);
    openCheckout();
  };

  return (
    <Drawer open={isDrawerOpen} onClose={closeDrawer}>
      {items.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-lg font-bold mb-2 text-brand-forest">سلتك فارغة</p>
          <p className="text-brand-ink/60 mb-6">اطلبي نور الشيب — 199 ريال · دفع عند الاستلام</p>
          <Link href={`/products/${HERO_SLUG}`} onClick={closeDrawer}>
            <Button className="bg-brand-forest">اطلبي الآن</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="p-4 space-y-4 overflow-y-auto flex-1">
            <div className="flex items-center justify-between text-xs text-brand-trust bg-brand-cream rounded-lg px-3 py-2">
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> مرخّص SFDA · حلال
              </span>
              <span>دفع عند الاستلام</span>
            </div>

            {items.map((item) => {
              const savings = bundleSavings(item.qty);
              return (
                <div key={item.slug} className="flex gap-3 pb-4 border-b border-brand-cream-dark">
                  <div className="relative w-14 h-14 rounded-lg shrink-0 border border-brand-cream-dark overflow-hidden bg-brand-cream">
                    <Image
                      src={PRODUCT_IMAGES.packShot}
                      alt={item.nameAr}
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-brand-forest">{item.nameAr}</p>
                    <p className="text-sm text-brand-forest font-bold">
                      {calculateLineTotal(item.qty)} ريال
                    </p>
                    {savings > 0 && (
                      <p className="text-xs text-brand-trust">وفّرت {savings} ريال 🎉</p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.slug, item.qty - 1)}
                        className="p-1 border rounded hover:bg-brand-cream"
                        aria-label="تقليل"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.slug, item.qty + 1)}
                        className="p-1 border rounded hover:bg-brand-cream"
                        aria-label="زيادة"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.slug)}
                        className="p-1 text-red-500 mr-auto"
                        aria-label="حذف"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          <div className="p-4 border-t bg-white mt-auto shrink-0">
            <div className="flex justify-between mb-1">
              <span className="font-medium">الإجمالي (دفع عند الاستلام):</span>
              <span className="font-extrabold text-xl text-brand-forest">{total} ريال</span>
            </div>
            <p className="text-xs text-brand-ink/60 mb-3 flex items-center gap-1">
              <Phone className="w-3 h-3" /> خطوة واحدة وتخلصين · بنتصل للتأكيد ✓
            </p>
            <Button fullWidth className="bg-brand-forest hover:bg-brand-forest-light" onClick={handleCheckout}>
              إتمام الطلب — {total} ريال
            </Button>
            <p className="text-[10px] text-center text-brand-ink/45 mt-2">
              ضمان 30 يوم · دفع عند الاستلام · توصيل المملكة
            </p>
          </div>
        </>
      )}
    </Drawer>
  );
}
