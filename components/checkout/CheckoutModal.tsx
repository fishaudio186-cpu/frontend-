"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { useCartStore } from "@/lib/cart-store";
import { calculateLineTotal } from "@/lib/pricing";
import { StarRating } from "@/components/ui/StarRating";
import { getHeroProduct } from "@/lib/products";
import { Phone, ShieldCheck, Truck, RotateCcw } from "lucide-react";

const hero = getHeroProduct();

const TEST_PHONES = new Set(["055000000", "0550000000"]);

const schema = z.object({
  customer_name: z.string().min(3, "الاسم مطلوب (3 أحرف على الأقل)"),
  customer_phone: z
    .string()
    .refine(
      (v) => TEST_PHONES.has(v) || /^05\d{8}$/.test(v),
      "رقم جوال سعودي صحيح: 05xxxxxxxx"
    ),
});

type FormData = z.infer<typeof schema>;

export function CheckoutModal({
  onSuccess,
}: {
  onSuccess: (data: FormData) => void;
}) {
  const { items, isCheckoutOpen, closeCheckout, getTotal } = useCartStore();
  const [submitting, setSubmitting] = useState(false);
  const total = getTotal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    onSuccess(data);
    setSubmitting(false);
  };

  return (
    <Modal open={isCheckoutOpen} onClose={closeCheckout}>
      <div className="pt-8">
        <h2 className="text-xl font-extrabold text-brand-forest mb-1">
          أكّدي طلبك · دفع عند الاستلام
        </h2>
        <p className="text-sm text-brand-ink/60 mb-3">
          بدون دفع أونلاين — نتواصل معك للتأكيد قبل الشحن
        </p>
        <StarRating rating={hero.rating} count={hero.reviewCount} className="mb-4" />

        <div className="bg-brand-cream rounded-xl p-4 mb-4 text-sm space-y-1 border border-brand-cream-dark">
          <p className="font-bold mb-2 text-brand-forest">ملخص الطلب</p>
          {items.map((item) => (
            <div key={item.slug} className="flex justify-between">
              <span>
                {item.nameAr} × {item.qty}
              </span>
              <span>{calculateLineTotal(item.qty)} ريال</span>
            </div>
          ))}
          <div className="flex justify-between font-extrabold text-lg pt-2 border-t mt-2">
            <span>الإجمالي (دفع عند الاستلام)</span>
            <span className="text-brand-berry">{total} ريال</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4 text-[11px]">
          {[
            { icon: Phone, t: "تأكيد بالجوال خلال 24 ساعة" },
            { icon: Truck, t: "توصيل 1–3 أيام" },
            { icon: ShieldCheck, t: "مرخّص SFDA · حلال" },
            { icon: RotateCcw, t: "ضمان 30 يوم" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-1.5 bg-white border rounded-lg px-2 py-2">
              <Icon className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span className="text-brand-forest font-medium">{t}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">الاسم الكامل *</label>
            <input
              {...register("customer_name")}
              placeholder="مثال: لمى الفهد"
              className="w-full border rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-forest/30"
              dir="rtl"
            />
            {errors.customer_name && (
              <p className="text-red-500 text-sm mt-1">{errors.customer_name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">رقم الجوال *</label>
            <input
              {...register("customer_phone")}
              placeholder="0512345678"
              type="tel"
              className="w-full border rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-forest/30"
              dir="ltr"
            />
            <p className="text-xs text-brand-ink/60 mt-1">
              مثال: 0512345678 — نتصل على هذا الرقم لتأكيد طلبك
            </p>
            {errors.customer_phone && (
              <p className="text-red-500 text-sm mt-1">{errors.customer_phone.message}</p>
            )}
          </div>

          <Button type="submit" fullWidth disabled={submitting} className="bg-brand-forest hover:bg-brand-forest-light text-lg">
            أكّدي — {total} ريال · دفع عند الاستلام
          </Button>
        </form>

        <TrustBadges className="mt-4 justify-center" />
        <div className="mt-4 p-3 rounded-xl bg-brand-forest/5 text-xs text-center text-brand-ink/65 leading-relaxed">
          ✓ نتواصل معك خلال 24 ساعة لتأكيد الطلب
          <br />
          ✓ لا نشحن إلا بعد التأكيد — لضمان وصول طلبك
          <br />
          ✓ تدفعين فقط عند استلام الطلب عند الباب
        </div>
      </div>
    </Modal>
  );
}
