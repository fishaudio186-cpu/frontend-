"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { getOrder, type OrderDetail } from "@/lib/api";
import { maskPhone } from "@/lib/phone";
import { Phone, Truck, Wallet, CheckCircle2, MessageCircle } from "lucide-react";

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order: orderId } = use(searchParams);
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!orderId) return;
    getOrder(orderId)
      .then(setOrder)
      .catch(() => setError(true));
  }, [orderId]);

  if (!orderId) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <p>لم يتم العثور على الطلب</p>
        <Link href="/" className="text-brand-forest underline mt-4 inline-block">
          الرئيسية
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <p>جاري معالجة طلبك… إذا استمرت المشكلة تواصلي معنا</p>
        <p className="font-mono text-sm mt-2">{orderId}</p>
        <p className="text-sm text-brand-ink/60 mt-4">hello@nurdakhil.com</p>
      </div>
    );
  }

  if (!order) {
    return <div className="max-w-xl mx-auto px-4 py-16 text-center">جاري التحميل...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-10">
        <div className="w-16 h-16 rounded-full bg-brand-trust/15 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9 text-brand-trust" />
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-brand-forest">
          تم استلام طلبك بنجاح
        </h1>
        <p className="text-sm text-brand-ink/60 mt-2">رقم الطلب: {order.order_id}</p>
        <p className="text-sm text-brand-forest font-medium mt-1">شكراً لثقتك في نورالداخل</p>
      </div>

      <div className="bg-brand-forest text-white rounded-2xl p-8 text-center mb-6 shadow-premium">
        <p className="text-sm opacity-80">المبلغ عند الاستلام</p>
        <p className="text-4xl md:text-5xl font-extrabold mt-2">{order.order_total} ريال</p>
        <p className="text-sm mt-4 flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 text-brand-gold" />
          سنتواصل معك خلال 24 ساعة على {maskPhone(order.customer_phone)}
        </p>
        <p className="text-xs opacity-75 mt-2">
          مهم: أبقي جوالك متاحاً — التأكيد بالجوال يضمن وصول طلبك
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-brand-cream-dark p-6 mb-8 shadow-card">
        <h2 className="font-extrabold text-brand-forest mb-4">ماذا يحدث الآن؟</h2>
        <div className="space-y-4">
          {[
            {
              icon: Phone,
              t: "① نتصل لتأكيد الطلب",
              d: "خلال 24 ساعة — يرجى الرد لتثبيت العنوان وبدء الشحن. عدم الرد قد يؤخر الطلب.",
            },
            {
              icon: Truck,
              t: "② نشحن خلال 24–48 ساعة",
              d: "بعد التأكيد — توصيل 1–3 أيام للمدن الرئيسية. المندوب يتواصل قبل الوصول.",
            },
            {
              icon: Wallet,
              t: `③ تدفعين عند الاستلام — ${order.order_total} ريال`,
              d: "كاش أو مدى عند الباب. راجعي الطلب أولاً — ثم ادفعي.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brand-forest" />
              </div>
              <div>
                <p className="font-bold text-sm text-brand-forest">{t}</p>
                <p className="text-xs text-brand-ink/60 mt-0.5 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand-cream rounded-2xl p-6 mb-8 border border-brand-cream-dark">
        <h2 className="font-bold mb-4 text-brand-forest">ملخص الطلب</h2>
        {order.items.map((item) => (
          <div key={item.slug + item.qty} className="flex justify-between py-2 border-b border-brand-cream-dark text-sm last:border-0">
            <span>
              {item.name_ar} × {item.qty}
            </span>
            <span className="font-medium">{item.line_total} ريال</span>
          </div>
        ))}
        {order.upsell_accepted && order.upsell_item && (
          <div className="flex justify-between py-2 text-sm text-brand-trust">
            <span>قطعة إضافية (عرض خاص) × 1</span>
            <span>{order.upsell_price} ريال</span>
          </div>
        )}
        <div className="flex justify-between font-extrabold pt-3 text-brand-forest">
          <span>الإجمالي (دفع عند الاستلام)</span>
          <span>{order.order_total} ريال</span>
        </div>
      </div>

      <div className="text-center text-sm text-brand-ink/60 mb-10 p-4 rounded-xl border border-dashed border-brand-forest/20">
        <MessageCircle className="w-5 h-5 text-brand-gold mx-auto mb-2" />
        <p>
          ضمان رضا 30 يوم · أي استفسار:{" "}
          <a href="mailto:hello@nurdakhil.com" className="text-brand-forest font-bold underline">
            hello@nurdakhil.com
          </a>
        </p>
      </div>
    </div>
  );
}
