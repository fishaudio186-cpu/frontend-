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
    <fieldset>
      <legend className="font-bold text-brand-forest mb-3">اختاري العرض</legend>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-1 md:gap-3">
        {BUNDLE_OPTIONS.map((opt) => (
          <label
            key={opt.qty}
            className={cn(
              "relative flex min-h-[108px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 bg-white px-2 py-3 text-center transition md:block md:min-h-0 md:p-4 md:text-right",
              selected === opt.qty
                ? "border-brand-forest bg-brand-forest/[0.04] shadow-md"
                : "border-brand-forest/12 hover:border-brand-forest/30"
            )}
          >
            {"popular" in opt && opt.popular && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-gold px-2 py-0.5 text-[9px] font-bold text-brand-forest-dark md:static md:mb-1 md:inline-block md:translate-x-0 md:text-xs">
                أفضل قيمة
              </span>
            )}
            <input
              type="radio"
              name="bundle"
              checked={selected === opt.qty}
              onChange={() => onChange(opt.qty)}
              className="sr-only"
            />
            <div className="md:flex md:items-start md:gap-3">
              <span
                aria-hidden
                className={cn(
                  "hidden md:mt-1 md:flex md:h-5 md:w-5 md:shrink-0 md:items-center md:justify-center md:rounded-full md:border-2",
                  selected === opt.qty ? "md:border-brand-forest" : "md:border-brand-forest/25"
                )}
              >
                {selected === opt.qty && <span className="h-2.5 w-2.5 rounded-full bg-brand-forest" />}
              </span>
              <div className="md:flex-1">
                {labels && (
                  <p className="hidden text-xs text-brand-trust font-medium mb-1 md:block">
                    {labels[opt.qty as 1 | 2 | 3]}
                  </p>
                )}
                <p className="text-xs font-bold text-brand-forest md:text-base">{opt.label}</p>
                <p className="mt-1 text-lg font-extrabold text-brand-berry md:text-xl">
                  {opt.price} <span className="text-[10px] md:text-sm">ر.س</span>
                </p>
                {opt.savings > 0 && (
                  <p className="mt-1 text-[10px] font-bold text-brand-trust md:text-sm">
                    وفّري {opt.savings} ريال
                  </p>
                )}
                <p className="hidden text-sm text-brand-ink/60 mt-1 md:block">
                  {opt.qty === 1 && "قطعة واحدة · شهر كامل"}
                  {opt.qty === 2 && "قطعتان · ثبّتي النتيجة"}
                  {opt.qty === 3 && "3 قطع · روتين كامل"}
                </p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </fieldset>
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
