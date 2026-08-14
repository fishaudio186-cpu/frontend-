import { ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#082116] text-brand-gold-soft/90 text-center text-[10px] md:text-xs py-2 px-3 flex items-center justify-center gap-1.5 tracking-wide border-b border-brand-gold/15">
      <ShieldCheck className="w-3 h-3 md:w-3.5 md:h-3.5 text-brand-gold shrink-0" />
      <span className="md:hidden whitespace-nowrap">مرخّص SFDA · دفع عند الاستلام · شحن مجاني</span>
      <span className="hidden md:inline">مرخّص SFDA · حلال 100% · ضمان 30 يوم · دفع عند الاستلام · شحن مجاني</span>
    </div>
  );
}
