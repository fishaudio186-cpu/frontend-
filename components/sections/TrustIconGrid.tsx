import { Shield, Leaf, Factory, Calendar } from "lucide-react";

export function TrustIconGrid({ className }: { className?: string }) {
  const items = [
    { icon: Shield, top: "SFDA", label: "مسجّل رسمياً" },
    { icon: Leaf, top: "حلال", label: "حلال 100%" },
    { icon: Factory, top: "GMP", label: "تصنيع معتمد" },
    { icon: Calendar, top: "30 يوم", label: "ضمان استرجاع" },
  ];
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${className ?? ""}`}>
      {items.map((item) => (
        <div
          key={item.top}
          className="bg-white rounded-xl p-4 text-center border border-brand-cream-dark shadow-sm"
        >
          <item.icon className="w-5 h-5 text-brand-gold mx-auto mb-2" />
          <p className="text-sm font-extrabold text-brand-plum">{item.top}</p>
          <p className="text-[10px] text-[#6B6B6B] mt-0.5">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
