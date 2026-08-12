"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-xs font-english tracking-widest text-brand-gold uppercase text-center mb-2">FAQ</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-brand-plum mb-2">{title}</h2>
        {subtitle && <p className="text-center text-[#6B6B6B] mb-10">{subtitle}</p>}
        {!subtitle && <div className="mb-8" />}
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-right font-bold"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <ChevronDown className={cn("w-5 h-5 shrink-0 transition", open === i && "rotate-180")} />
              </button>
              {open === i && (
                <p className="px-4 pb-4 text-[#6B6B6B] text-sm leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
