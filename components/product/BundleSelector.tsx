"use client";

import { cn } from "@/lib/utils";
import { BUNDLE_OPTIONS, calculateLineTotal } from "@/lib/pricing";

export function BundleSelector({
  selected,
  onChange,
  labels,
}: {
  selected: number;
  onChange: (qty: number) => void;
  labels?: { 1: string; 2: string; 3: string };
}) {
  return (
    <div className="space-y-3">
      <p className="font-bold text-brand-forest">اختاري العرض:</p>
      {BUNDLE_OPTIONS.map((opt) => (
        <label
          key={opt.qty}
          className={cn(
            "block p-4 rounded-xl border-2 cursor-pointer transition",
            selected === opt.qty
              ? "border-brand-forest bg-brand-forest/5 shadow-md"
              : "border-brand-forest/12 hover:border-brand-forest/30 bg-white"
          )}
        >
          <div className="flex items-start gap-3">
            <input
              type="radio"
              name="bundle"
              checked={selected === opt.qty}
              onChange={() => onChange(opt.qty)}
              className="accent-brand-forest w-5 h-5 mt-1"
            />
            <div className="flex-1">
              {labels && (
                <p className="text-xs text-brand-trust font-medium mb-1">
                  {labels[opt.qty as 1 | 2 | 3]}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold">{opt.label}</span>
                {"popular" in opt && opt.popular && (
                  <span className="text-xs bg-brand-gold text-white px-2 py-0.5 rounded-full">
                    الأكثر اختياراً
                  </span>
                )}
                {opt.qty === 3 && (
                  <span className="text-xs bg-brand-trust/15 text-brand-trust px-2 py-0.5 rounded-full">
                    الأكثر توفيراً
                  </span>
                )}
              </div>
              <p className="text-sm text-brand-ink/60 mt-1">
                {opt.qty === 1 && "قطعة واحدة · شهر كامل"}
                {opt.qty === 2 && "قطعتان · ثبّتي النتيجة"}
                {opt.qty === 3 && "3 قطع · روتين كامل"}
              </p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-xl font-extrabold text-brand-berry">{opt.price} ر.س</span>
                {opt.savings > 0 && (
                  <span className="text-sm text-brand-trust">وفّري {opt.savings} ريال</span>
                )}
              </div>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}

export function StatPills({
  pills,
  className,
}: {
  pills: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-4 gap-1.5 md:gap-3", className)}>
      {pills.map((p) => (
        <div key={p.label} className="bg-white border border-brand-forest/10 rounded-lg md:rounded-xl px-1 py-2 md:p-3 text-center">
          <p className="text-sm md:text-xl font-extrabold text-brand-forest">{p.value}</p>
          <p className="text-[9px] md:text-xs leading-tight text-brand-ink/60">{p.label}</p>
        </div>
      ))}
    </div>
  );
}

export function CodTrustRow() {
  const items = [
    { t: "الدفع عند الاستلام", d: "بدون دفع أونلاين" },
    { t: "توصيل 1–3 أيام", d: "كل مدن المملكة" },
    { t: "ضمان 30 يوم", d: "استرجاع كامل" },
    { t: "مسجّل · حلال", d: "ثقة سعودية" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {items.map((i) => (
        <div key={i.t} className="text-center p-2 bg-brand-cream rounded-lg text-xs">
          <p className="font-bold text-brand-forest">{i.t}</p>
          <p className="text-brand-ink/60">{i.d}</p>
        </div>
      ))}
    </div>
  );
}
