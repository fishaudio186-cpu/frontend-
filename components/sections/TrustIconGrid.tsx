import { Shield, Leaf, Factory, Calendar } from "lucide-react";

/** Outline trust row — Nama-inspired, no filled cards */
export function TrustIconGrid({ className }: { className?: string }) {
  const items = [
    { icon: Shield, top: "SFDA", label: "مسجّل رسمياً" },
    { icon: Leaf, top: "حلال", label: "نباتي 100%" },
    { icon: Factory, top: "GMP", label: "تصنيع معتمد" },
    { icon: Calendar, top: "30 يوم", label: "ضمان استرجاع" },
  ];
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${className ?? ""}`}>
      {items.map((item) => (
        <div
          key={item.top}
          className="border border-brand-plum/15 bg-white/50 backdrop-blur-sm rounded-xl px-3 py-4 text-center"
        >
          <item.icon className="w-4 h-4 text-brand-gold mx-auto mb-2" strokeWidth={1.75} />
          <p className="text-sm font-extrabold text-brand-plum">{item.top}</p>
          <p className="text-[10px] text-brand-ink/55 mt-0.5">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
