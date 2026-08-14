import { ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#14070d] text-white/70 text-center text-[11px] md:text-xs py-2.5 px-4 flex items-center justify-center gap-2 tracking-wide border-b border-white/5">
      <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
      <span>مرخّص SFDA · حلال 100% · ضمان 30 يوم · دفع عند الاستلام · شحن مجاني</span>
    </div>
  );
}
