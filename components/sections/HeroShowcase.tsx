import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { PRODUCT_IMAGES } from "@/lib/product-images";

/** Studio pack shot presented as a bright brand plate against the dark hero. */
export function HeroShowcase() {
  return (
    <div className="relative animate-soft-rise">
      <div className="relative rounded-[2rem] bg-white shadow-[0_40px_90px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="pt-7 pb-2 text-center">
          <p className="font-extrabold text-brand-plum text-lg md:text-xl">نورالداخل</p>
          <p className="font-english text-brand-gold text-[10px] md:text-[11px] tracking-[0.32em] uppercase mt-1">
            nurdakhil
          </p>
        </div>

        <div className="relative aspect-[4/3.4] md:aspect-[4/3.2] hero-plate">
          <Image
            src={PRODUCT_IMAGES.packShot}
            alt="نور الشيب — العلبة والبخاخ الأصلية 100 مل"
            fill
            priority
            sizes="(max-width: 768px) 92vw, 46vw"
            className="object-contain p-5 md:p-8 drop-shadow-[0_28px_45px_rgba(74,20,40,0.16)]"
          />
        </div>
      </div>

      <div className="absolute -bottom-5 right-4 md:right-6 flex items-center gap-2.5 rounded-2xl bg-brand-plum-dark/95 backdrop-blur px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.4)] border border-white/10">
        <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" strokeWidth={1.8} />
        <div className="leading-tight">
          <p className="font-english text-[10px] tracking-[0.18em] text-brand-gold font-semibold">
            SFDA LICENSED
          </p>
          <p className="text-[11px] text-white/70">مرخّص من الغذاء والدواء</p>
        </div>
      </div>
    </div>
  );
}
