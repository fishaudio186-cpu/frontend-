import { ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-plum text-white text-center text-xs md:text-sm py-2.5 px-4 flex items-center justify-center gap-2">
      <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
      <span>مرخّص SFDA · حلال 100% · ضمان 30 يوم · دفع عند الاستلام · شحن مجاني</span>
    </div>
  );
}
